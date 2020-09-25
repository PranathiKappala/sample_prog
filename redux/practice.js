const redux = require('redux');
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require('axios')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const FETCH_EMPLOYEE_REQUEST = 'FETCH_EMPLOYEE_REQUEST';
const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
const FETCH_EMPLOYEE_FAILURE = 'FETCH_EMPLOYEE_FAILURE';

function fetchEmployeeRequest(){
return{
  type : FETCH_EMPLOYEE_REQUEST
}
}
function fetchEmployeeSuccess(employee){
  return{
    type:FETCH_EMPLOYEE_SUCCESS,
    payload:employee
  }
}
function fetchEmployeefailure(err){
  return{
    type:FETCH_EMPLOYEE_FAILURE,
    payload:err
  }
}

const fetchEmployee = ()=>{
    return function (dispatch,getState) {
  dispatch(fetchEmployeeRequest());
  axios('https://api.github.com/users')
  .then((response)=>{
      const employee = response.data.slice(0,5);
      dispatch(fetchEmployeeSuccess(employee))
  }).catch((err)=>{
      dispatch(fetchEmployeefailure(err.message))
  })
}
}
const initialState = {
    loading: false,
    employee : [],
    err:''
}
const employeeReducer=(state=initialState,action)=>{

  switch(action.type){
  case(FETCH_EMPLOYEE_REQUEST):
  return{
    ...state,
    loading:true
  }
  case(FETCH_EMPLOYEE_SUCCESS):
  return {
      ...state,
      loading: false,
      employee: action.payload,
      err :''
  }

case FETCH_EMPLOYEE_FAILURE:
  return {
      ...state,
      loading:false,
      employee:[],
      err: action.payload
  }
}
}

const store = createStore(employeeReducer, applyMiddleware(logger,thunkMiddleware))

store.subscribe(()=> {console.log(store.getState())});

store.dispatch(fetchEmployee())

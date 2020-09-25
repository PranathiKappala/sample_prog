// http://dummy.restapiexample.com/api/v1/employees
const redux = require('redux');
const thunkMiddleware = require("redux-thunk").default;
const axios = require('axios')
// const reduxLogger = require('redux-logger')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
// const logger = reduxLogger.createLogger()


//consts
const FETCH_EMPLOYEE_REQUEST = 'FETCH_EMPLOYEE_REQUEST';
const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
const FETCH_EMPLOYEE_FAILURE =  'FETCH_EMPLOYEE_FAILURE';

// Actions
//fetchEmployeeRequest,fetchEmployeeSuccess,fetchEmployeefailure are action creaters that return plain action obj
const fetchEmployeeRequest = () =>{
    return {
        type: FETCH_EMPLOYEE_REQUEST
    }
}

const fetchEmployeeSuccess = (employee) => {
   // console.log(".......", employee)
    return {
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: employee
    }
}

const fetchEmployeefailure = (err)=>{
    return {
        type: FETCH_EMPLOYEE_FAILURE,
        payload: err
    }
}

const initialState = {
    loading: false,
    employee : [],
    err:''
}
//Reducers

const employeeReducer = (state=initialState, action)=>{

    switch (action.type) {
        case FETCH_EMPLOYEE_REQUEST:
               return {
                    ...state,
                    loading: true
                }

        case FETCH_EMPLOYEE_SUCCESS:
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

//fetchEmployee is a action creater which returns a function(async) instead of action obj
const fetchEmployee =  () => {

    return  function async (dispatch,getState) {
        dispatch(fetchEmployeeRequest())
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
        .then((response)=>{
            const employee = response.data.data;
            dispatch(fetchEmployeeSuccess(employee))
        }).catch((err)=>{
            dispatch(fetchEmployeefailure(err.message))
        })
    }
}

const store = createStore(employeeReducer, applyMiddleware(thunkMiddleware))

store.subscribe(()=> {console.log(store.getState())});

store.dispatch(fetchEmployee())

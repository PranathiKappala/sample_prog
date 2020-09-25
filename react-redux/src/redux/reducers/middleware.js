import * as types from "../constants"

const initialState={
  count:0
}

const countReducer = (state=initialState,action)=>{
  switch(action.type){
    case types.INCREMENT:
                          return{
                            count : action.val+1
                          }
    case types.DECREMENT:
                          return{
                            count : action.val-1
                          }
		default:
					return state;
  }
}
export default countReducer

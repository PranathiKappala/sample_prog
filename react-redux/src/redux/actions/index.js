import * as types from "../constants"


export const increment = (val) => {
  console.log(val);
    return {
        type: types.INCREMENT,
        val
    }
}

export const decrement = (val) => {
    return {
        type: types.DECREMENT,
        val
    }
}

// const fetchData=()=>{
//   return function (dispatch){
//     dispatch(increment())
//     dispatch(decrement())
//   }
// }

// export default fetchData

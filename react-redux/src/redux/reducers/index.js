import { combineReducers } from 'redux'

import countReducer from'./middleware'

const reducers = combineReducers({countReducer})

export default reducers;

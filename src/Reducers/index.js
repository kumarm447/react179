//ROOT FILE OF REDUCER FOR ALL REDUCERS STATES...

import { combineReducers } from 'redux';

import EmpReducer from './EmpReducer.js'
import UserReducer from './UserReducer.js'
import StudentsReducer from './StudentsReducer.js'


var RootReducer=combineReducers({
    EmpReducer,UserReducer,StudentsReducer
})


export default RootReducer;
import { createStore, applyMiddleware } from "redux";
import RootReducer from './../Reducers/index.js'// all reducers are available

import promiseMiddleware from 'redux-promise'

//createStore(reducer,middleware);

var store=createStore(RootReducer,applyMiddleware(promiseMiddleware));

export default store;


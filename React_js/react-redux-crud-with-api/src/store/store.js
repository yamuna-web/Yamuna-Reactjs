import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; 
import { usersReducer } from "./userReducer"; 

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

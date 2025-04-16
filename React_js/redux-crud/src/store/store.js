import { createStore, combineReducers } from "redux";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});
export const store = createStore(rootReducer);

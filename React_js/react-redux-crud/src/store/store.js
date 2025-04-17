import { createStore, combineReducers } from 'redux';

import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
    users: userReducer
});

export const store = createStore(rootReducer);
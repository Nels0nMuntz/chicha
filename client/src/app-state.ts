import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from "redux";

import { authReducer } from './features/auth/store';


const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type AppState = ReturnType<typeof rootReducer>;
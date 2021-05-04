import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({});

// @ts-ignore
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
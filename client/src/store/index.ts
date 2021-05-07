import { applyMiddleware, combineReducers, createStore, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import user from './user/reducer';
import auth from './auth/reducer';
import loading from './loading/reducer';


const rootReducer = combineReducers({
    user,
    auth,
    loading
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export type ThunkActionType<T extends AnyAction> = ThunkAction<Promise<void>, RootState, unknown, T>

export type ThunkDispatchType<T extends AnyAction> = ThunkDispatch<RootState, unknown, T>

export default store;
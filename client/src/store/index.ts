import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import user from './user/reducer';
import auth from './auth/reducer';
import loading from './loading/reducer';
import notification from './notification/reducer';
import dialogs from './dialogs/reducer';


const rootReducer = combineReducers({
    user,
    auth,
    loading,
    notification,
    dialogs
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
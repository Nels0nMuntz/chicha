import { AuthService, LocalStorageService } from "../../services";
import { ISigninData, ISignupData, AuthThunkAction, AuthThunkDispatch } from "./types";
import { setAuthDataAC, setAuthStateAC } from './actions';


export const fetchAuthDataThunk = (signinData: ISigninData) : AuthThunkAction => {
    return async (dispatch: AuthThunkDispatch) => {
        try {
            let { user, accessToken } = await AuthService.signin(signinData);
            dispatch(setAuthDataAC(user));
            dispatch(setAuthStateAC(true));
            LocalStorageService.setAccessToken(accessToken);
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
};

export const updateAuthDataThunk = () : AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let user = await AuthService.update();        
        dispatch(setAuthDataAC(user));
        dispatch(setAuthStateAC(false));
    } catch (error) {
        console.log(error.response.data.message);        
    }
};

export const sendAuthDataThunk = (signupData: ISignupData) : AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let user = await AuthService.signup(signupData);
        dispatch(setAuthDataAC(user));
        dispatch(setAuthStateAC(false));
    } catch (error) {
        console.log(error.response.data.message);
    }
};
import { AuthService, LocalStorageService } from "../../services";
import { ISigninData, AuthThunkAction, AuthThunkDispatch } from "./types";
import { setAuthDataAC } from './actions';


export const fetchAuthDataThunk = (signinData: ISigninData) : AuthThunkAction => {
    return async (dispatch: AuthThunkDispatch) => {
        try {
            let { user, accessToken } = await AuthService.signin(signinData);
            dispatch(setAuthDataAC(user));
            LocalStorageService.setAccessToken(accessToken);
        } catch (error) {
            console.log(error);
        }
    }
};

export const updateAuthDataThunk = () : AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let user = await AuthService.update();
        dispatch(setAuthDataAC(user));
    } catch (error) {
        console.log(error);        
    }
};
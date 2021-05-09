import { Status } from "../../types/types";
import { AuthService, LocalStorageService } from "../../services";
import { ISigninData, ISignupData, AuthThunkAction, AuthThunkDispatch } from "./types";
import { setAuthDataAC, setSigninStatusAC, setSignupStatusAC } from './actions';
import { configureNotificationAC } from "../notification/actions";
import { StatusCode } from "../notification/types";


export const fetchAuthDataThunk = (signinData: ISigninData): AuthThunkAction => {
    return async (dispatch: AuthThunkDispatch) => {
        try {
            let { user, accessToken } = await AuthService.signin(signinData);
            dispatch(setAuthDataAC(user));
            dispatch(setSigninStatusAC(Status.SUCCESS));
            LocalStorageService.setAccessToken(accessToken);
        } catch (error) {
            console.log(error?.response.data.message);
            dispatch(setSigninStatusAC(Status.FAILD));
        }
    }
};

export const updateAuthDataThunk = (): AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let user = await AuthService.update();
        dispatch(setAuthDataAC(user));
        dispatch(setSigninStatusAC(Status.SUCCESS));
    } catch (error) {
        console.log(error?.response?.data?.message);
        dispatch(setSigninStatusAC(Status.FAILD));
    }
};

export const sendAuthDataThunk = (signupData: ISignupData): AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let user = await AuthService.signup(signupData);
        dispatch(setAuthDataAC(user));
        dispatch(setSignupStatusAC(Status.SUCCESS));
    } catch (error) {
        console.log(error?.response?.data?.message);
        dispatch(setSignupStatusAC(Status.FAILD));
        // dispatch(configureNotificationAC({ statusCode: StatusCode.Error, message: 'sxs' }))
    }
};
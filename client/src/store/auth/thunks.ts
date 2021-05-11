import { Status } from "../../types/types";
import { AuthService, LocalStorageService } from "../../services";
import { ISigninData, ISignupData, AuthThunkAction, AuthThunkDispatch } from "./types";
import { setAuthDataAC, setSigninStatusAC, setSignupStatusAC } from './actions';
import { configureNotificationAC } from "../notification/actions";


export const fetchAuthDataThunk = (signinData: ISigninData): AuthThunkAction => {
    return async (dispatch: AuthThunkDispatch) => {
        try {
            let { data, accessToken } = await AuthService.signin(signinData);
            dispatch(setAuthDataAC(data));
            dispatch(setSigninStatusAC(Status.SUCCESS));
            LocalStorageService.setAccessToken(accessToken);
        } catch (error) {
            const errorMessage = error.response.data.message
            console.log(errorMessage);
            dispatch(setSigninStatusAC(Status.FAILD));
            dispatch(configureNotificationAC({
                status: Status.FAILD,
                message: errorMessage,
                isOpen: true
            }));
        }
    }
};

export const updateAuthDataThunk = (): AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let { data } = await AuthService.update();
        dispatch(setAuthDataAC(data));
        dispatch(setSigninStatusAC(Status.SUCCESS));
    } catch (error) {
        const errorMessage = error.response.data.message
        console.log(errorMessage);
        console.log(error?.response?.data?.message);
        dispatch(setSigninStatusAC(Status.FAILD));
    }
};

export const sendAuthDataThunk = (signupData: ISignupData): AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let { data, message } = await AuthService.signup(signupData);
        dispatch(setAuthDataAC(data));
        dispatch(setSignupStatusAC(Status.SUCCESS));
        dispatch(configureNotificationAC({
            status: Status.FAILD,
            message: message,
            isOpen: true,
        }));
    } catch (error) {
        const errorMessage = error.response.data.message
        console.log(errorMessage);
        dispatch(setSignupStatusAC(Status.FAILD));
        dispatch(configureNotificationAC({
            status: Status.FAILD,
            message: errorMessage,
            isOpen: true,
        }));
    }
};
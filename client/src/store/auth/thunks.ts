import { AxiosResponseError, Status } from "../../types/types";
import { AuthService, LocalStorageService } from "../../services";
import { ISigninData, ISignupData, AuthThunkAction, AuthThunkDispatch, ErrorFieldDetails } from "./types";
import { setAuthDataAC, setSigninStatusAC, setSignupStatusAC, setErrorFieldsAC } from './actions';
import { configureNotificationAC } from "../notification/actions";


type AxiosAuthResponseError = AxiosResponseError<Array<ErrorFieldDetails>>;

export const fetchAuthDataThunk = (signinData: ISigninData): AuthThunkAction => {
    return async (dispatch: AuthThunkDispatch) => {
        try {
            let { data, message } = await AuthService.signin(signinData);
            dispatch(setAuthDataAC(data.user));
            dispatch(setSigninStatusAC(Status.SUCCESS));
            dispatch(configureNotificationAC({
                status: Status.SUCCESS,
                message: message,
                isOpen: true
            }));
            LocalStorageService.setAccessToken(data.accessToken);
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
        let { data, message } = await AuthService.update();
        dispatch(setAuthDataAC(data.user));
        dispatch(setSigninStatusAC(Status.SUCCESS));
        dispatch(configureNotificationAC({
            status: Status.SUCCESS,
            message: message,
            isOpen: true
        }));
    } catch (error) {
        const errorMessage = error.response.data.message
        console.log(errorMessage);
        dispatch(setSigninStatusAC(Status.FAILD));
    }
};

export const sendAuthDataThunk = (signupData: ISignupData): AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let { data, message } = await AuthService.signup(signupData);
        dispatch(setAuthDataAC(data.user));
        dispatch(setSignupStatusAC(Status.SUCCESS));
        dispatch(configureNotificationAC({
            status: Status.SUCCESS,
            message: message,
            isOpen: true,
        }));
    } catch (error) {        
        const data: AxiosAuthResponseError = error;
        const params = data.details;
        dispatch(setSignupStatusAC(Status.FAILD));
        dispatch(configureNotificationAC({
            status: Status.FAILD,
            message: data.message,
            isOpen: true,
        }));
        dispatch(setErrorFieldsAC(params));
    }
};
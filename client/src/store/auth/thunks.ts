import { AxiosResponseError } from "../../types/types";
import { authService, localStorageService } from "../../services";
import { ISigninData, ISignupData, AuthThunkAction, AuthThunkDispatch, ErrorFieldDetails } from "./types";
import { setAuthDataAC, setSigninStatusAC, setSignupStatusAC, setErrorFieldsAC } from './actions';
import { setNotificationAC } from "../notification/actions";


type AxiosAuthResponseError = AxiosResponseError<Array<ErrorFieldDetails>>;

export const signinThunk = (signinData: ISigninData): AuthThunkAction => {
    return async (dispatch: AuthThunkDispatch) => {
        try {
            let { data, message } = await authService.signin(signinData);
            dispatch(setAuthDataAC(data.user));
            dispatch(setSigninStatusAC('SUCCESS'));
            dispatch(setNotificationAC({
                status: 'SUCCESS',
                message: message,
                isOpen: true
            }));
            localStorageService.setAccessToken(data.accessToken);
        } catch (error) {
            console.log(error.message);
            dispatch(setSigninStatusAC('FAILD'));
            dispatch(setNotificationAC({
                status: 'FAILD',
                message: error.message,
                isOpen: true
            }));
        }
    }
};

export const signupThunk = (signupData: ISignupData): AuthThunkAction => async (dispatch: AuthThunkDispatch) => {
    try {
        let { data, message } = await authService.signup(signupData);
        dispatch(setAuthDataAC(data));
        dispatch(setSignupStatusAC('SUCCESS'));
        dispatch(setNotificationAC({
            status: 'SUCCESS',
            message: message,
            isOpen: true,
        }));
    } catch (error) {        
        const data: AxiosAuthResponseError = error;
        const params = data.details;
        dispatch(setSignupStatusAC('FAILD'));
        dispatch(setNotificationAC({
            status: 'FAILD',
            message: data.message,
            isOpen: true,
        }));
        dispatch(setErrorFieldsAC(params));
    }
};
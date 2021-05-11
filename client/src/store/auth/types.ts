import { IUser } from "../user/types";
import { Status, ThunkActionType, ThunkDispatchType } from "../../types/types";
import { SwitchNotificationAction, ConfigureNotificationAction } from "../notification/types";


type SET_AUTH_DATA = 'SET_AUTH_DATA';
type SET_SIGNIN_STATUS = 'SET_SIGNIN_STATUS';
type SET_SIGNUP_STATUS = 'SET_SIGNUP_STATUS';

export interface IInitialState {
    user: IUser
    signinStatus: Status
    signupStatus: Status
};

export interface ISigninData {
    email: string
    password: string
};

export interface ISignupData {
    email: string,
    firstName: string,
    lastName: string | null,
    phoneNumber: string,
    password: string,
    passwordRepeat: string,
};

export type SetAuthDataAction = {
    type: SET_AUTH_DATA,
    payload: {
        user: IUser
    }
};

export type SetSigninStatusAction = {
    type: SET_SIGNIN_STATUS,
    payload: {
        signinStatus: Status
    }
};

export type SetSignupStatusAction = {
    type: SET_SIGNUP_STATUS,
    payload: {
        signupStatus: Status
    }
};

export type AuthAction = SetAuthDataAction | SetSigninStatusAction | SetSignupStatusAction | SwitchNotificationAction | ConfigureNotificationAction;

export type AuthThunkAction = ThunkActionType<AuthAction>;

export type AuthThunkDispatch = ThunkDispatchType<AuthAction>;
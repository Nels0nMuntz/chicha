import { IUser } from "../user/types";
import { ThunkActionType, ThunkDispatchType } from "..";


type SET_AUTH_DATA = 'SET_AUTH_DATA';
type SET_AUTH_STATE = 'SET_AUTH_STATE';

export interface IInitialState {
    user: IUser
    isAuth: boolean
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

export type SetAuthStateAction = {
    type: SET_AUTH_STATE,
    payload: {
        isAuth: boolean
    }
};

export type Action = SetAuthDataAction | SetAuthStateAction;

export type AuthThunkAction = ThunkActionType<Action>;

export type AuthThunkDispatch = ThunkDispatchType<Action>;
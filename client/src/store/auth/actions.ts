import { Status } from "../../types/types";
import { IUser } from "../user/types";
import { SetAuthDataAction, SetSigninStatusAction, SetSignupStatusAction, SetErrorFieldsAction, ErrorFieldDetails, SetAuthStatusAction } from "./types";

export const setAuthDataAC = (user: IUser) : SetAuthDataAction => ({ type: 'SET_AUTH_DATA' , payload: { user } });

export const SetAuthStatusAC = (status: Status) : SetAuthStatusAction => ({ type: 'SET_AUTH_STATUS', payload: { status } });

export const setSigninStatusAC = (signinStatus: Status) : SetSigninStatusAction => ({ type: 'SET_SIGNIN_STATUS' , payload: { signinStatus } });

export const setSignupStatusAC = (signupStatus: Status) : SetSignupStatusAction => ({ type: 'SET_SIGNUP_STATUS' , payload: { signupStatus } });

export const setErrorFieldsAC = (details: Array<ErrorFieldDetails>) : SetErrorFieldsAction => ({ type: 'SET_ERROR_FIELDS', payload: { details } });
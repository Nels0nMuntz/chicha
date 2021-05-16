import { Status } from "../../types/types";
import { IUser } from "../user/types";
import { SetAuthDataAction, SetSigninStatusAction, SetSignupStatusAction, SetErrorFieldsAction, ErrorFieldDetails } from "./types";

export const setAuthDataAC = (user: IUser) : SetAuthDataAction => ({ type: 'SET_AUTH_DATA' , payload: { user } });

export const setSigninStatusAC = (signinStatus: Status) : SetSigninStatusAction => ({ type: 'SET_SIGNIN_STATUS' , payload: { signinStatus } });

export const setSignupStatusAC = (signupStatus: Status) : SetSignupStatusAction => ({ type: 'SET_SIGNUP_STATUS' , payload: { signupStatus } });

export const setErrorFieldsAC = (details: Array<ErrorFieldDetails>) : SetErrorFieldsAction => ({ type: 'SET_ERROR_FIELDS', payload: { details } });
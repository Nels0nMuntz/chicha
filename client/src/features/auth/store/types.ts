import { Status } from '../../../shared';


type SET_SIGN_IN_STATUS = "SET_SIGN_IN_STATUS";
type SET_SIGN_UP_STATUS = "SET_SIGN_UP_STATUS";

export type SetSignInStatusAction = {
    type: SET_SIGN_IN_STATUS,
    payload: Status
};

export type SetSignUpStatusAction = {
    type: SET_SIGN_UP_STATUS,
    payload: Status
};

export type AuthAction = 
    SetSignInStatusAction
    | SetSignUpStatusAction;

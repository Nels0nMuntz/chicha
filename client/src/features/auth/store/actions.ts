import { Status } from '../../../shared';
import {
    SetSignInStatusAction,
    SetSignUpStatusAction,
} from './types';

export const setSignInStatusAction = (status: Status): SetSignInStatusAction => ({
    type: "SET_SIGN_IN_STATUS",
    payload: status,
});

export const setSignUpStatusAction = (status: Status): SetSignUpStatusAction => ({
    type: "SET_SIGN_UP_STATUS",
    payload: status,
});
import { Status } from '../../../shared';
import { AuthAction } from './types';


interface IAuthState {
    signInStatus: Status
    signUpStatus: Status
}

const initialState: IAuthState = {
    signInStatus: 'initia',
    signUpStatus: 'initia',
};

export const authReducer = (state: IAuthState = initialState, action: AuthAction): IAuthState => {

    switch (action.type) {
        case "SET_SIGN_IN_STATUS":
            return {
                ...state,
                signInStatus: action.payload
            }
        case "SET_SIGN_UP_STATUS":
            return {
                ...state,
                signUpStatus: action.payload
            }
        default:
            return state;
    };
    
};
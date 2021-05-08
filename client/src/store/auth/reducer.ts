import { Status } from '../../types/types';
import { IInitialState, Action } from './types';


const initialState: IInitialState = {
    user: {
        id: '',
        email: '',
        firstname: '',
        lastname: null,
        password: '',
        phoneNumber: '',
    },
    signinStatus: Status.UNKNOWN,
    signupStatus: Status.UNKNOWN,
};

const authReducer = (state: IInitialState = initialState, action: Action): IInitialState => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return {
                ...state, 
                user: action.payload.user
            };
        case 'SET_SIGNIN_STATUS':
            return {
                ...state, 
                signinStatus: action.payload.signinStatus
            };
        case 'SET_SIGNUP_STATUS':
            return {
                ...state, 
                signupStatus: action.payload.signupStatus
            };
        default:
            return state;
    }
};

export default authReducer;
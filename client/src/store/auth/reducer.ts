import { IInitialState, AuthAction } from './types';


const initialState: IInitialState = {
    user: {
        id: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber: '',
        avatar: ''
    },
    signinStatus: 'INITIAL',
    signupStatus: 'INITIAL',
    authStatus: 'INITIAL',
    errorFields: [],
};

const authReducer = (state: IInitialState = initialState, action: AuthAction): IInitialState => {
    switch (action.type) {
        case 'SET_AUTH_DATA':
            return {
                ...state, 
                user: action.payload.user
            };
        case 'SET_AUTH_STATUS':
            return {
                ...state, 
                authStatus: action.payload.status
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
        case 'SET_ERROR_FIELDS':
            return {
                ...state, 
                errorFields: action.payload.details
            };
        default:
            return state;
    }
};

export default authReducer;
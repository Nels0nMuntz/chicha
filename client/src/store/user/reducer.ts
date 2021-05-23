
import { IInitialState, UserAction } from './types';

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
    search: []
};

const userReducer = (state: IInitialState = initialState, action: UserAction): IInitialState => {
    switch (action.type) {
        case 'SET_USER_DATA':
            const { user } = action.payload;
            return {
                ...state,
                user
            };
        case 'SET_SEARCH_USERS':
            return {
                ...state,
                search: action.payload.users
            };
        default:
            return state;
    };
};

export default userReducer;
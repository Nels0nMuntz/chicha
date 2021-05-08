
import { IInitialState, Action } from './types';

const initialState: IInitialState = {
    user: {
        id: '',
        email: '',
        firstname: '',
        lastname: null,
        password: '',
        phoneNumber: '',
    }
};

const userReducer = (state: IInitialState = initialState, action: Action) : IInitialState => {
    switch (action.type) {
        case 'SET_USER_DATA':
            const { user } = action.payload;
            return {
                ...state,
                user
            }
        default:
            return state;
    };
};

export default userReducer;
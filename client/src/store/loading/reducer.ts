import { Action, IInitialState } from "./types";

const initialState: IInitialState = {
    isloading: false
};

const loadingReducer = (state: IInitialState = initialState, action: Action) : IInitialState => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                ...state,
                isloading: action.payload.isLoading
            }
        default:
            return state;
    }
};

export default loadingReducer;
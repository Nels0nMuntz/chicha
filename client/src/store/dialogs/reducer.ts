import { DialogsAction, IInitialState } from "./types";


const initialState: IInitialState = {
    dialogs: []
};

const dialogsReducer = (state: IInitialState = initialState, action: DialogsAction) : IInitialState => {
    switch (action.type) {
        case 'SET_DIALOGS':
            return {
                ...state,
                dialogs: action.payload.dialogs
            };
        default:
            return state;
    }
};

export default dialogsReducer;
import { DialogsAction, IInitialState } from "./types";


const initialState: IInitialState = {
    dialogs: [],
    status: 'INITIAL',
};

const dialogsReducer = (state: IInitialState = initialState, action: DialogsAction) : IInitialState => {
    switch (action.type) {
        case 'SET_DIALOG':
            return {
                ...state,
                dialogs: [
                    ...state.dialogs.filter(({ id }) => id !== action.payload.dialog.id),
                    action.payload.dialog
                ]
            };
        case 'SET_DIALOGS':
            return {
                ...state,
                dialogs: action.payload.dialogs
            };
        case 'SET_DIALOGS_STATUS': 
            return {
                ...state,
                status: action.payload.status
            };
        default:
            return state;
    }
};

export default dialogsReducer;
import { DialogsAction, IInitialState } from "./types";


const initialState: IInitialState = {
    dialogs: []
};

const dialogsReducer = (state: IInitialState = initialState, action: DialogsAction) : IInitialState => {
    switch (action.type) {
        case 'SET_DIALOGS':
            return {
                ...state,
                dialogs: action.payload.dialogs.map(dialog => ({ ...dialog, messages: null }))
            };
        case "SET_LAST_MESSAGES":
            const keys = Object.keys(action.payload.messages);
            const dialogs = keys.map(id => {
                let dialog = state.dialogs.find(item => item.id === id);
                if(!dialog) return undefined;
                dialog.messages = [action.payload.messages[id]]
                return dialog
            })
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default dialogsReducer;
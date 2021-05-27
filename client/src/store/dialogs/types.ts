import { ThunkActionType, ThunkDispatchType } from "../../types/types";
import { LoadingAction } from "../loading/types";
import { ConfigureNotificationAction } from "../notification/types";
import { IUser } from "../user/types";

type SET_DIALOGS = 'SET_DIALOGS';
type SET_LAST_MESSAGES = 'SET_LAST_MESSAGES';

export interface IDialog {
    id: string
    participant: IUser
};

export interface IDialogUI extends IDialog {
    messages: Array<IMessage> | null
};

export type IMessage = {
    id: string
    dialog: string
    createdBy: string
    text: string
    read: boolean
};

export type LastMessages = {
    [key: string]: IMessage
};

export interface IInitialState {
    dialogs: Array<IDialogUI>
};

export type SetDialogsAction = {
    type: SET_DIALOGS,
    payload: {
        dialogs: Array<IDialog>
    }
};

export type SetLastMessagesAction = {
    type: SET_LAST_MESSAGES,
    payload: {
        messages: LastMessages
    }
};

export type DialogsAction = SetDialogsAction | SetLastMessagesAction | LoadingAction | ConfigureNotificationAction;

export type DialogsThunkAction = ThunkActionType<DialogsAction>;

export type DialogsThunkDispatch = ThunkDispatchType<DialogsAction>;
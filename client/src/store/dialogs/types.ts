import { Status, ThunkActionType, ThunkDispatchType } from "../../types/types";
import { SetAuthStatusAction } from "../auth/types";
import { SetNotificationAction } from "../notification/types";
import { IUser } from "../user/types";

type SET_DIALOG = 'SET_DIALOG';
type SET_DIALOGS = 'SET_DIALOGS';
type SET_STATUS = 'SET_DIALOGS_STATUS';

export interface IDialog {
    id: string
    member: IUser
    messages: Array<IMessage | null>
};

export type IMessage = {
    id: string
    dialog: string
    createdBy: string
    text: string
    read: boolean
};

export interface IInitialState {
    dialogs: Array<IDialog>
    status: Status
};

export type SetDialogAction = {
    type: SET_DIALOG,
    payload: {
        dialog: IDialog
    }
};

export type SetDialogsAction = {
    type: SET_DIALOGS,
    payload: {
        dialogs: Array<IDialog>
    }
};

export type SetStatusAction = {
    type: SET_STATUS,
    payload: {
        status: Status
    }
};

export type DialogsAction = SetDialogAction | SetDialogsAction | SetStatusAction | SetNotificationAction | SetAuthStatusAction;

export type DialogsThunkAction = ThunkActionType<DialogsAction>;

export type DialogsThunkDispatch = ThunkDispatchType<DialogsAction>;
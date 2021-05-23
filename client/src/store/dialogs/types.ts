import { ThunkActionType, ThunkDispatchType } from "../../types/types";
import { ConfigureNotificationAction } from "../notification/types";
import { IUser } from "../user/types";

type SET_DIALOGS = 'SET_DIALOGS';

export interface IDialog {
    id: string
    participant: IUser
};

export interface IInitialState {
    dialogs: Array<IDialog>
};

export type SetDialogsAction = {
    type: SET_DIALOGS,
    payload: {
        dialogs: Array<IDialog>
    }
};

export type DialogsAction = SetDialogsAction | ConfigureNotificationAction;

export type DialogsThunkAction = ThunkActionType<DialogsAction>;

export type DialogsThunkDispatch = ThunkDispatchType<DialogsAction>;
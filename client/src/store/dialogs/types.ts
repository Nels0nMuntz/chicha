import { ThunkActionType, ThunkDispatchType } from "../../types/types";
import { ConfigureNotificationAction } from "../notification/types";

type SET_DIALOGS = 'SET_DIALOGS';

export interface IDialog {
    id: string
    participent_1: string
    participent_2: string
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
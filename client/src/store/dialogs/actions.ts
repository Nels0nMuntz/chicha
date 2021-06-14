import { Status } from "../../types/types";
import { IDialog, SetDialogAction, SetDialogsAction, SetStatusAction } from "./types";

export const setDialogsAC = (dialogs: Array<IDialog>) : SetDialogsAction => ({ type: 'SET_DIALOGS', payload: { dialogs } });

export const setDialogAC = (dialog: IDialog) : SetDialogAction => ({ type: 'SET_DIALOG', payload: { dialog } });

export const setDialogsStatusAC = (status: Status) : SetStatusAction => ({ type: 'SET_DIALOGS_STATUS', payload: { status } });
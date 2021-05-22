import { IDialog, SetDialogsAction } from "./types";

export const setDialogsAC = (dialogs: Array<IDialog>) : SetDialogsAction => ({ type: 'SET_DIALOGS', payload: { dialogs } });
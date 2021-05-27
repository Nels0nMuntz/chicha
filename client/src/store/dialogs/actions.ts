import { IDialog, LastMessages, SetDialogsAction, SetLastMessagesAction } from "./types";

export const setDialogsAC = (dialogs: Array<IDialog>) : SetDialogsAction => ({ type: 'SET_DIALOGS', payload: { dialogs } });

export const setLastMessageAC = (messages: LastMessages) : SetLastMessagesAction => ({ type: "SET_LAST_MESSAGES", payload: { messages } });
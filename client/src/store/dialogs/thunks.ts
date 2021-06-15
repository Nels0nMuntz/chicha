import { dialogService, messageService } from "../../services";
import { DialogsThunkAction, DialogsThunkDispatch } from "./types";
import { setDialogsAC, setLastMessageAC } from './actions';
import { setIsLoadingAC } from "../loading/actions";
import { setNotificationAC } from "../notification/actions";


export const getDialogsThunk = () : DialogsThunkAction => async  (dispatch: DialogsThunkDispatch) => {
    try {
        const { data: dialogs } = await dialogService.getDialogs();
        const dialogIds = dialogs.map(dialog => dialog.id);
        const { data: messages } = await messageService.getAllLast(dialogIds)
        dispatch(setDialogsAC(dialogs));  
        dispatch(setLastMessageAC(messages));  
        dispatch(setIsLoadingAC(false));
    } catch (error) {
        console.log(error);   
        dispatch(setNotificationAC({
            status: 'FAILD',
            message: error.message,
            isOpen: true
        }))    
    }
};
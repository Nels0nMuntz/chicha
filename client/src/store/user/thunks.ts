import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "..";
import { UserService } from "../../services";
import { Action } from "./types";
import { setUserDataAC } from './actions';


export const fetchUserDataThunk = (): ThunkAction<Promise<void>, RootState, unknown, Action> => async (dispatch: ThunkDispatch<RootState, unknown, Action>) => {
    try {
        let userData = await UserService.getUserData();
        dispatch(setUserDataAC(userData));
    } catch (error) {
        console.log(error);
    }
}
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "..";
import { UserService } from "../../services";
import { UserAction } from "./types";
import { setUserDataAC, setSearchUsersAC } from './actions';


export const fetchUserDataThunk = (): ThunkAction<Promise<void>, RootState, unknown, UserAction> => async (dispatch: ThunkDispatch<RootState, unknown, UserAction>) => {
    try {
        let userData = await UserService.getUserData();
        dispatch(setUserDataAC(userData));
    } catch (error) {
        console.log(error);
    }
};

export const searchUsersThunk = (input: string) : ThunkAction<Promise<void>, RootState, unknown, UserAction> => {
    return async (dispatch: ThunkDispatch<RootState, unknown, UserAction>) => {
        try {             
            const users = await UserService.search(input);
            dispatch(setSearchUsersAC(users));
        } catch (error) {
            console.log(error);            
        }
    }
}
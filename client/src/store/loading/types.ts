import { ThunkActionType, ThunkDispatchType } from "../../types/types";

type SET_IS_LOADING = 'SET_IS_LOADING';

export interface IInitialState {
    isloading: boolean
};

type SetIsLoadingAction = {
    type: SET_IS_LOADING,
    payload: { isLoading: boolean }
};

export type Action = SetIsLoadingAction;

export type LoadingThunkAction = ThunkActionType<Action>;

export type LoadingThunkDispatch = ThunkDispatchType<Action>;
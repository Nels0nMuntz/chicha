import { ThunkActionType, ThunkDispatchType } from "../../types/types";

type SET_IS_LOADING = 'SET_IS_LOADING';

export interface IInitialState {
    isloading: boolean
};

type SetIsLoadingAction = {
    type: SET_IS_LOADING,
    payload: { isLoading: boolean }
};

export type LoadingAction = SetIsLoadingAction;

export type LoadingThunkAction = ThunkActionType<LoadingAction>;

export type LoadingThunkDispatch = ThunkDispatchType<LoadingAction>;
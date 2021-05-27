import { LoadingAction } from "./types";

export const setIsLoadingAC = (isLoading: boolean) : LoadingAction => ({ type: 'SET_IS_LOADING', payload: { isLoading } });
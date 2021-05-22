import { LoadingAction } from "./types";

export const setIsLoading = (isLoading: boolean) : LoadingAction => ({ type: 'SET_IS_LOADING', payload: { isLoading } });
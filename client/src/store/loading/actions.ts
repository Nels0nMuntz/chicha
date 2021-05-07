import { Action } from "./types";

export const setIsLoading = (isLoading: boolean) : Action => ({ type: 'SET_IS_LOADING', payload: { isLoading } });
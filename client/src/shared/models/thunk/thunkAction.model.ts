import { AnyAction } from "redux";
import { ThunkAction as TAction } from "redux-thunk";
import { AppState } from '../../../app-state';

export type ThunkAction<T extends AnyAction> = TAction<Promise<void>, AppState, unknown, T>;
import { AnyAction } from "redux";
import { ThunkDispatch as TDispatch } from "redux-thunk";
import { AppState }from '../../../app-state';

export type ThunkDispatch<T extends AnyAction> = TDispatch<AppState, unknown, T>;
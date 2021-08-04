import { IUseFormValues } from '../../../../shared';

export interface ISignInForm extends IUseFormValues {
    email: string
    password: string
};
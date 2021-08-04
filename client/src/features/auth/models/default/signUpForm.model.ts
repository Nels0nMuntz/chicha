import { IUseFormValues } from '../../../../shared';

export interface ISignUpForm extends IUseFormValues {
    email: string
    firstName: string
    lastName: string
    phoneNumber: string
    password: string
    paswordConfirm: string
};
// vemdor
import * as Yup from 'yup';
// internal
import { FormikHelpers } from 'formik';


export interface IUseFormField {
    name: string
    type: 'text' | 'password' | "tel"
    label: string
    id: string
    initialValue: string
    error?: string
};

export type IUseFormFields<T> = {
    [P in keyof T]: IUseFormField
};

export interface IUseFormConfig<T> {
    fields: IUseFormFields<T>,
    validationShema: Yup.BaseSchema,
    onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
};
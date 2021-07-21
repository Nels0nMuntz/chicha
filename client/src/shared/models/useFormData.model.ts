import { FormikTouched, FormikErrors, FieldInputProps, FormikValues } from "formik";


export interface IUseFormData<T extends FormikValues> {
    touched: FormikTouched<T>
    errors: FormikErrors<T>
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
    getFieldProps: (field: string) => FieldInputProps<any>
}
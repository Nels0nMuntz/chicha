import { useFormik } from 'formik';

import { IUseFormConfig, IUseFormData, IUseFormField, IUseFormValues } from '../../shared';


export const useForm = <T extends IUseFormValues>(props: IUseFormConfig<T>) : IUseFormData<T> => {

    const initialValues = Object.values<IUseFormField>(props.fields).reduce((prev, curr) => {
        return {
            ...prev,
            [curr?.name]: curr?.initialValue,
        }
    }, {} as T);

    const formik = useFormik<T>({
        initialValues,
        validationSchema: props.validationShema,
        onSubmit: props.onSubmit,
    });   

    const { 
        touched, 
        errors, 
        isValid,
        dirty,
        getFieldProps, 
        handleSubmit, 
        setFieldValue 
    } = formik;

    return {
        errors,
        touched,
        isValid,
        dirty,
        getFieldProps,
        handleSubmit,
        setFieldValue,
    };
};
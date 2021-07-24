// vendors
import { useFormik } from 'formik';
// internal
import { IUseFormConfig, IUseFormData } from '../../shared';
import { IUseFormField } from '../models/useFormConfig.model';


export const useForm = <T extends object>(props: IUseFormConfig<T>) : IUseFormData<T> => {

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

    const { touched, errors, getFieldProps, handleSubmit, setFieldValue } = formik;

    return {
        errors,
        touched,
        getFieldProps,
        handleSubmit,
        setFieldValue,
    };
};
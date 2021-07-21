// vendors
import { FormikValues, useFormik } from 'formik';
// internal
import { IUseFormConfig, IUseFormData } from '../../shared';


export const useForm = <Values extends FormikValues = FormikValues>(props: IUseFormConfig) : IUseFormData<Values> => {

    const initialValues = props.fields.reduce<Values>((prev, curr) => ({ ...prev, [curr.name]: curr.initialValue }), {} as Values);

    const formik = useFormik<Values>({
        initialValues,
        onSubmit: (values) => console.log(values)
    });

    return {
        errors: formik.errors,
        touched: formik.touched,
        getFieldProps: formik.getFieldProps,
        handleSubmit: formik.handleSubmit,
    };
};
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import FormTextField from '../TextField/FormTextField';
import MainButton from '../MainButton/MainButton';
import { isEmpty } from '../../shared'
import { ISigninData } from '../../store/auth/types';
import { RootState } from '../../store';



type SigninFormProps = {
    onSubmitForm: (values: ISigninData) => void;
};

const SigninForm: React.FC<SigninFormProps> = ({ onSubmitForm }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => onSubmitForm(values)
    });

    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);

    const isTouched = !isEmpty(formik.touched);

    React.useEffect(() => {
        if (signinStatus !== 'RUNNING') formik.setSubmitting(false);
    }, [signinStatus, formik.submitCount]);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormTextField
                id="login-email"
                type="text"
                label="E-mail"
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : " "}
                isTouched={formik.touched.email ? true : false}
                isValid={formik.errors.email ? false : true}
                {...formik.getFieldProps("email")}
            />
            <FormTextField
                id="login-password"
                type="password"
                label="Пароль"
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : " "}
                isTouched={formik.touched.password ? true : false}
                isValid={formik.errors.password ? false : true}
                {...formik.getFieldProps("password")}
            />
            <MainButton
                text="Войти в аккаунт"
                type={formik.isValid && isTouched && !formik.isSubmitting ? "submit" : "button"}
                isLoading={formik.isSubmitting}
            />
            <Link
                to="/auth/signup"
                className="form-redirect-link"
            >
                Зарегистрироваться
            </Link>
        </form>
    );
};

export default SigninForm;
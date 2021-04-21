import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

import FormTextField from '../TextField/FormTextField';
import MainButton from '../MainButton/MainButton';
import { validator } from '../../shared/helpers'

const validate = validator.signin;

const SigninForm : React.FC = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => console.log(values)
    });        

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
                type="submit"
                text="Войти в аккаунт" 
            />
            <Link 
                to="/signup" 
                className="form-redirect-link"
            >
                Зарегистрироваться
            </Link>
        </form>
    );
};

export default SigninForm;
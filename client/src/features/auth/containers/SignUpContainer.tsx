// vendors
import React from 'react';
import { useFormik } from 'formik';
// internal
import { AuthLayout } from '../components';
import { ISignUpForm } from '../models';


const SignUpContainer: React.FC = () => {

    // const formik = useFormik({
    //     initialValues: {
    //         email: '',

    //     },
    //     onSubmit: (values) => console.log(values)
    // })

    // console.log(formik);

    return (
        <AuthLayout
            title="Регистрация"
            subtitle="Для входа в чат, вам нужно зарегистрироваться"
        />
    )
};

export default SignUpContainer;
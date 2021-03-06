import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import FormTextField from '../TextField/FormTextField';
import MainButton from '../MainButton/MainButton';
import { isEmpty } from '../../shared';
import { ISignupData } from '../../store/auth/types';
import PhoneInput from './../TextField/PhoneInput';
import { RootState } from '../../store';


type SignupFormProps = {
    onSubmitForm: (values: ISignupData) => void
};

const SignupForm: React.FC<SignupFormProps> = ({ onSubmitForm }) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
            passwordRepeat: '',
        },
        onSubmit: values => onSubmitForm(values)
    });

    const onChangePhoneInput = (value: string) => {      
        formik.setFieldValue('phoneNumber', value);
    }; 

    const signinStatus = useSelector((state: RootState) => state.auth.signinStatus);
    const errorFields = useSelector((state: RootState) => state.auth.errorFields);
    
    const isTouched = !isEmpty(formik.touched);

    React.useEffect(() => {
        if (signinStatus !== 'RUNNING') formik.setSubmitting(false);
    }, [signinStatus, formik.submitCount]);

    React.useEffect(() => {
        errorFields.forEach(({ param, msg }) => formik.setFieldError(param, msg))
    }, [errorFields, formik]);

    return (

        <form onSubmit={formik.handleSubmit}>
            <FormTextField
                id="register-email"
                type="text"
                label="E-mail"
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : " "}
                isTouched={formik.touched.email ? true : false}
                isValid={formik.errors.email ? false : true}
                {...formik.getFieldProps("email")}
            />
            <FormTextField
                id="register-firstName"
                type="text"
                label="???????? ??????"
                helperText={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : " "}
                isTouched={formik.touched.firstName ? true : false}
                isValid={formik.errors.firstName ? false : true}
                {...formik.getFieldProps("firstName")}
            />
            <FormTextField
                id="register-lastName"
                type="text"
                label="???????? ??????????????"
                helperText={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : " "}
                isTouched={formik.touched.lastName ? true : false}
                isValid={formik.errors.lastName ? false : true}
                {...formik.getFieldProps("lastName")}
            />
            <PhoneInput
                id="register-phoneNumber"
                label="?????????? ????????????????"
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber ? formik.errors.phoneNumber : " "}
                isTouched={formik.touched.phoneNumber ? true : false}
                isValid={formik.errors.phoneNumber ? false : true}
                {...formik.getFieldProps("phoneNumber")}
                onChange={onChangePhoneInput}
            />
            <FormTextField
                id="register-password"
                type="password"
                label="????????????"
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : " "}
                isTouched={formik.touched.password ? true : false}
                isValid={formik.errors.password ? false : true}
                {...formik.getFieldProps("password")}
            />
            <FormTextField
                id="register-passwordRepeat"
                type="password"
                label="?????????????????? ????????????"
                helperText={formik.touched.passwordRepeat && formik.errors.passwordRepeat ? formik.errors.passwordRepeat : " "}
                isTouched={formik.touched.passwordRepeat ? true : false}
                isValid={formik.errors.passwordRepeat ? false : true}
                {...formik.getFieldProps("passwordRepeat")}
            />
            <MainButton
                text="????????????????????????????????????"
                type={formik.isValid && isTouched && !formik.isSubmitting ? "submit" : "button"}
                isLoading={formik.isSubmitting}
            />
            <Link
                to="/auth/signin"
                className="form-redirect-link"
            >
                ?????????? ?? ??????????????
            </Link>
        </form>
    )
};

export default SignupForm;
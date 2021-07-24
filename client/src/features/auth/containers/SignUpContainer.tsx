// vendor
import React from 'react';
// internal
import { IUseFormConfig, SignUpFormValidationSchema, useForm } from '../../../shared';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import { ISignUpForm } from '../models';


const SignUpContainer: React.FC = () => {

    const formConfig: IUseFormConfig<ISignUpForm> = {
        fields: {
            email: {
                id: 'user-email',
                initialValue: '',
                label: "Email",
                name: "email",
                type: "text",
            },
            firstName: {
                id: "user-first-name",
                initialValue: "",
                label: "First Name",
                name: "firstName",
                type: "text",
            },
            lastName: {
                id: "user-last-name",
                initialValue: "",
                label: "Last Name",
                name: "lastName",
                type: "text",
            },
            phoneNumber: {
                id: "user-phone-number",
                initialValue: "",
                label: "Phone Number",
                name: "phoneNumber",
                type: "tel",
            },
            password: {
                id: "user-password",
                initialValue: "",
                label: "Password",
                name: "password",
                type: "password",
            },
            paswordConfirm: {
                id: "user-repeat-password",
                initialValue: "",
                label: "Repaet password",
                name: "repeatPassword",
                type: "password",
            },
        },
        validationShema: SignUpFormValidationSchema,
        onSubmit: values => console.log(values),
    };

    const formData = useForm(formConfig);

    return (
        <SignUpForm
            fields={formConfig.fields}
            formData={formData}
        />
    )
};

export default SignUpContainer;
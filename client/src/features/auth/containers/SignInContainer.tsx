// vendors
import React from 'react';
// custom
import { useForm, IUseFormConfig, SignInFormValidationSchema } from '../../../shared';
import { ISignInForm } from '../models';
import SignInForm from '../components/SignInForm/SignInForm';


const SignInContainer: React.FC = () => {

    const formConfig: IUseFormConfig<ISignInForm> = {
        fields: {
            email: {
                id: 'user-email',
                initialValue: '',
                label: "Email",
                name: "email",
                type: "text",
            },
            password: {
                id: "user-password",
                initialValue: "",
                label: "Password",
                name: "password",
                type: "password",
            }
        },
        validationShema: SignInFormValidationSchema,
        onSubmit: (values) => console.log(values)
    };

    const formData = useForm(formConfig);

    return (
        <SignInForm
            fields={formConfig.fields}
            formData={formData}
        />
    )
};

export default SignInContainer;
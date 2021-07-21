// vendors
import React from 'react';
// custom
import { useForm, IUseFormConfig } from '../../../shared';
import { ISignUpForm } from '../models';
import SignInForm from '../components/SignInForm/SignInForm';


const SignInContainer: React.FC = () => {

    const formConfig: IUseFormConfig = {
        fields: [
            {
                id: 'email',
                initialValue: '',
                label: "Email",
                name: "email",
                type: "text",
            }
        ]
    }

    const form = useForm<ISignUpForm>(formConfig);

    return (
        <SignInForm
            fields={formConfig.fields}
            formData={form}
        />
    )
};

export default SignInContainer;
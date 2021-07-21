// vendor
import React from 'react';
// internal
import { ISignUpForm } from '../../models';
import { IUseFormData, TextField, IUseFormField } from '../../../../shared';


interface ISignInFormProps {
    fields: IUseFormField[]
    formData: IUseFormData<ISignUpForm>
}

const SignInForm: React.FC<ISignInFormProps> = ({ fields, formData }) => {
    return (
        <form onSubmit={formData.handleSubmit}>
            {fields.map(field => (
                <TextField
                    id={field.id}
                    type={field.type}
                    label={field.label}
                    helperText={formData.touched.email && formData.errors.email ? formData.errors.email : " "}
                    isTouched={formData.touched.email ? true : false}
                    isValid={formData.errors.email ? false : true}
                    {...formData.getFieldProps("email")}
                />
            ))}
        </form>
    )
};

export default SignInForm;
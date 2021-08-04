import React from 'react';
import { Link } from 'react-router-dom';

import { ISignInForm } from '../../models';
import { IUseFormData, TextField, IUseFormFields, SubmitButton } from '../../../../shared';


interface ISignInFormProps {
    fields: IUseFormFields<ISignInForm>
    formData: IUseFormData<ISignInForm>
};

const SignInForm: React.FC<ISignInFormProps> = ({ fields, formData }) => {
    
    return (
        <form onSubmit={formData.handleSubmit}>
            {Object.values(fields).map(field => {
                const name = field.name;
                return (
                    <TextField
                        key={field.name}
                        id={field.id}
                        type={field.type}
                        label={field.label}
                        helperText={formData.touched[name] && formData.errors[name] ? formData.errors[name] || " " : " "}
                        isTouched={formData.touched[name] ? true : false}
                        isValid={formData.errors[name] ? false : true}
                        {...formData.getFieldProps(name)}
                    />
                )
            })}
            <SubmitButton
                title="войти в аккаунт"
                status="initia"
                type={formData.isValid && formData.dirty ? 'submit' : 'button'}
            />
            <Link
                to="/auth/signup"
                className="form-redirect-link"
            >
                Зарегистрироваться
            </Link>
        </form>
    )
};

export default SignInForm;
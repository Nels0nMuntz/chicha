// vendor
import React from 'react';
import { Link } from 'react-router-dom';
// internal
import { ISignInForm } from '../../models';
import { IUseFormData, TextField, IUseFormFields } from '../../../../shared';


interface ISignInFormProps {
    fields: IUseFormFields<ISignInForm>
    formData: IUseFormData<ISignInForm>
};

const SignInForm: React.FC<ISignInFormProps> = ({ fields, formData }) => {
    // console.log(formData);
    
    return (
        <form onSubmit={formData.handleSubmit}>
            {Object.values(fields).map(field => {
                const name = field.name as keyof ISignInForm;
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
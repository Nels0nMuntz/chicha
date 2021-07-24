// vendor
import React from 'react';
import { Link } from 'react-router-dom';
// internal
import { IUseFormData, TextField, IUseFormFields, PhoneField } from '../../../../shared';
import { ISignUpForm } from '../../models';


interface ISignUpFormProps {
    fields: IUseFormFields<ISignUpForm>
    formData: IUseFormData<ISignUpForm>
};

const SignUpForm: React.FC<ISignUpFormProps> = ({ fields, formData }) => {

    const onChangePhoneInput = (value: string) => {      
        formData.setFieldValue('phoneNumber', value);
    };

    return (
        <form onSubmit={formData.handleSubmit}>
            {Object.values(fields).map(field => {
                const name = field.name as keyof ISignUpForm;
                if (field.type === "tel") {
                    return (
                        <PhoneField
                            key={field.name}
                            id={field.id}
                            label={field.label}
                            helperText={formData.touched[name] && formData.errors[name] ? formData.errors[name] || " " : " "}
                            isTouched={formData.touched[name] ? true : false}
                            isValid={formData.errors[name] ? false : true}
                            {...formData.getFieldProps(name)}
                            onChange={onChangePhoneInput}
                        />
                    )
                }
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
                to="/auth/signin"
                className="form-redirect-link"
            >
                Войти в аккаунт
            </Link>
        </form>
    )
};

export default SignUpForm;
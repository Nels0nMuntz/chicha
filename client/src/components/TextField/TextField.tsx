import React from 'react'

import { TextField as FormTextField } from '@material-ui/core';

import style from "./TextField.module.scss";


const TextField: React.FC = () => {
    return (
        <FormTextField
            className={style.textField}
            variant="outlined"
            label="E-mail"
        />
    )
}

export default TextField;

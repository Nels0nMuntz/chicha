import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import style from "./FormTextField.module.scss";
import errorImg from "../../assets/images/error.svg"
import successImg from "../../assets/images/success.svg"


type FormTextFieldPropsType = {
    id: string
    label: string
    type: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<any>) => void
};

const FormTextField: React.FC<FormTextFieldPropsType> = ({ id, type, label, name, value, onChange }) => {

    const CustomTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: '#4CA5FF',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#DDDDDD',
                },
                '&:hover fieldset': {
                    borderColor: '#B8B8B8',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#4CA5FF',
                },
            },
            '& .MuiOutlinedInput-adornedEnd': {
                paddingRight: "15px",
                '& .MuiIconButton-edgeEnd': {
                    padding: "10px",
                    '& + img': {
                        marginLeft: "10px"
                    }
                }
            }
        }
    })(TextField);

    return (
        <CustomTextField
            id={id}
            name={name}
            type={type}
            label={label}
            value={value}
            variant="outlined"
            helperText=" "
            fullWidth
            InputProps={{
                endAdornment:
                    <InputAdornment
                        position="end"
                    >
                        {type === "password" && (
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                {true ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        )}
                        <img className={style.endImage} src={errorImg} alt="error" />
                        {/* <img className={style.endImage} src={successImg} alt="error" /> */}
                    </InputAdornment>
            }}
            onChange={onChange}
        />
    );
};

export default FormTextField;

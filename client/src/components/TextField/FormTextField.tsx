import React from 'react'
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import style from "./FormTextField.module.scss";
import errorImg from "../../assets/images/error.svg"
import successImg from "../../assets/images/success.svg"


const useStyles = makeStyles({
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
        '& .MuiFormHelperText-root': {
            marginTop: '2px',
            marginBottom: '5px',
            lineHeight: '1.25',
            fontStyle: 'italic',
            color: '#f44336'
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
});

type FormTextFieldPropsType = {
    id: string
    label: string
    type: string
    name: string
    value: string
    helperText: string
    isTouched: boolean
    isValid: boolean
    onChange: (e: React.ChangeEvent<any>) => void
    onBlur: (e: React.ChangeEvent<any>) => void
};

const FormTextField: React.FC<FormTextFieldPropsType> = ({ id, type, label, name, value, helperText, isTouched, isValid, onChange, onBlur }) => {
    
    const classes = useStyles();
    const [isFocused, setIsFocused] = React.useState(false);
    
    const handleFocus = () => setIsFocused(!isFocused);

    return (
        <TextField
            id={id}
            name={name}
            type={type}
            label={label}
            value={value}
            helperText={helperText}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={handleFocus}
            error={!isValid && !isFocused && isTouched}
            variant="outlined"
            fullWidth
            className={classes.root}
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
                        {
                            // !isTouched ? null : (
                            //     !isValid ? (
                            //         <img className={style.endImage} src={errorImg} alt="error" />
                            //     ) : (
                            //         <img className={style.endImage} src={successImg} alt="success" />
                            //     )
                            // )
                        }
                    </InputAdornment>
            }}
        />
    );
};

export default FormTextField;

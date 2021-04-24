import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';


const useStyles = makeStyles({
    root: {
        '& .MuiInput-underline::after': {
            borderColor: '#4CA5FF'
        },
        '& .MuiInput-underline:before': {
            borderColor: 'rgba(0, 0, 0, 0.2)'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
        },
        '& .MuiInputBase-multiline': {
            padding: '0px 0 12px',
            alignItems: 'flex-start'
        },
        '& .MuiInputBase-inputMultiline': {
            minHeight: '46px',
            fontSize: '14px',
            lineHeight: '1.7',
        },
        '& .MuiInputAdornment-positionEnd': {
            marginTop: '12px',
            '& .MuiSvgIcon-root': {
                opacity: '0.5',
                cursor: 'pointer',
            },
        }
    }
});

const SendFormField: React.FC = () => {

    const classes = useStyles();

    return (
        <TextField
            fullWidth
            className={classes.root}
            multiline={true}
            placeholder="Write a message..."
            InputProps={{
                endAdornment:
                    <InputAdornment position="end">
                        <SentimentSatisfiedSharpIcon />
                    </InputAdornment>
            }}
        />
    )
};

export default SendFormField;
import React from 'react';
import classnames from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

import { Status } from '../../../shared';

import style from './SubmitButton.module.scss';


const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-10px 0 0 -10px"
    }
});

interface SubmitButtonProps {
    title: string
    status: Status
    type: 'button' | 'submit'
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ title, status, type }) => {

    const classes = useStyles();
    const isLoading = status === 'running';

    return (
        <button
            className={classnames(
                style.button,
                type === 'button' && style.cursorAuto
            )}
            type={type}
        >
            {isLoading ? (
                <CircularProgress
                    className={classes.root}
                    size={22}
                    color="inherit"
                />
            ) : title}
        </button>
    )
};

export default SubmitButton;
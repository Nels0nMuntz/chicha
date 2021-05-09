import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core';

import style from "./Dialog.module.scss";
import avatar from "../../assets/images/avatar.jpg"


const useStyles = makeStyles({
    root: {
        '& .MuiBadge-anchorOriginTopRightRectangle': {
            right: '10px'
        },
        '& .MuiBadge-badge': {
            padding: '0 5px',
            backgroundColor: '#F46B6B',
            color: 'white',
        }
    }
});

const Dialog: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={style.dialog_wrapper}>
            <div className={style.avatar_wrapper}>
                <img src={avatar} alt="avatar" />
            </div>
            <div className={style.dialog_info}>
                <div className={style.dialog_infoRow}>
                    <div className={style.user_fillname}>Jack the Ripper</div>
                    <div className={style.user_date}>Сейчас</div>
                </div>
                <div className={style.dialog_infoRow}>
                    <div className={style.dialog_message}>Я ща стрепсилс тебе куплю, потерпи</div>
                    <Badge 
                        badgeContent={28} 
                        className={classes.root}
                    />
                </div>
            </div>
        </div>
    )
};

export default Dialog;
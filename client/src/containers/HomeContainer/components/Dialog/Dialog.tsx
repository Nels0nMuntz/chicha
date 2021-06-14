import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core';

import style from "./Dialog.module.scss";
import { Avatar } from '../../../../components';


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

type DialogProps = {
    firstName: string
    lastName: string
    avatar: string
    lastMessage: string | null
};

const Dialog: React.FC<DialogProps> = ({ firstName, lastName, avatar, lastMessage }) => {

    const classes = useStyles();

    const fullname = lastName ? `${firstName} ${lastName}` : firstName;

    return (
        <div className={style.dialog_wrapper}>
            <div className={style.avatar_wrapper}>
                <Avatar
                    avatar={avatar}
                    firstName={firstName}
                />
            </div>
            <div className={style.dialog_info}>
                <div className={style.dialog_infoRow}>
                    <div className={style.user_fillname}>{fullname}</div>
                    <div className={style.user_date}>Сейчас</div>
                </div>
                <div className={style.dialog_infoRow}>
                    <div className={style.dialog_message}>{lastMessage}</div>
                    <div>
                        <Badge
                            badgeContent={28}
                            className={classes.root}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialog;
import React from 'react';

import style from "./Dialog.module.scss";
import avatar from "../../assets/images/avatar.jpg"


const Dialog: React.FC = () => {
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
                    <div className={style.dialog_status}>
                        <span>9</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialog;
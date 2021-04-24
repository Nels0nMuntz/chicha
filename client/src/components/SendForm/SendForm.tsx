import React from 'react';
import classnames from "classnames";

import SendFormField from './SendFormField';

import style from "./SendForm.module.scss";
import avatar from "../../assets/images/avatar.jpg"

const SendForm: React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div
                className={classnames(
                    style.sendForm_avatar,
                    style.sendForm_avatar_left
                )}
            >
                <img src={avatar} alt="avatar"/>
            </div>
            <form className={style.sendForm_field}>
                <SendFormField/>
            </form>
            <div
                className={classnames(
                    style.sendForm_avatar,
                    style.sendForm_avatar_right
                )}
            >
                <img src={avatar} alt="avatar"/>
            </div>
        </div>
    )
};

export default SendForm;
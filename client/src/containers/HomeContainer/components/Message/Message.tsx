import React from 'react';

import style from "./Message.module.scss";
import avatar from "../../../../assets/images/avatar.jpg"

enum MessageKind {
    Text,
    Image,
    Audio,
    Video,
    File,
}

const Message: React.FC = () => {
    
    return (
        <div className={style.wrapper}>
            <div className={style.message_grid}>
                <div className={style.message_avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={style.message_content}>content will be here</div>
                <div className={style.message_state}></div>
                <div className={style.message_date}>Вчера, в 13:23</div>
            </div>
        </div>
    )
};

export default Message;
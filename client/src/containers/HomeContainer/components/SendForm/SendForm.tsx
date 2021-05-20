import React from 'react';
import classnames from "classnames";
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';

import SendFormField from './SendFormField';
import { EmojiIcon } from '../../../../components';

import style from "./SendForm.module.scss";
import avatar from "../../../../assets/images/avatar.jpg"


const emojies = [
    { symbol: '😂', label: 'face with tears of joy' },
    { symbol: '😄', label: 'smiling face with open mouth and smiling eyes' },
    { symbol: '😍', label: 'smiling face with heart-shaped eyes' },
    { symbol: '😎', label: 'smiling face with sunglasses' },
    { symbol: '💔', label: 'broken heart' },
    { symbol: '😜', label: 'face with stuck-out tongue and winking eye' },
]

const SendForm : React.FC = () => {
    return (
        <div className={style.wrapper}>
            <div
                className={classnames(
                    style.sendForm_avatar,
                    style.sendForm_avatar_left
                )}
            >
                <img src={avatar} alt="avatar" />
            </div>
            <form className={style.sendForm}>
                <div className={style.sendForm_field}>
                    <SendFormField />
                </div>
                <div className={style.sendForm_footer}>
                    <div className={style.sendForm_attach}>
                        <div className={style.attach_item}>
                            <input
                                id="attach-file"
                                type="file"
                                name="attach-file"
                                className="visually-hidden"
                                multiple={true}
                            />
                            <label htmlFor="attach-file" title="Send file">
                                <InsertDriveFileIcon />
                            </label>
                        </div>
                        <div className={style.attach_item}>
                            <input
                                id="attach-media"
                                type="file"
                                name="attach-media"
                                className="visually-hidden"
                                multiple={true}
                                accept="image/*, video/*, audio/*"
                            />
                            <label htmlFor="attach-media" title="Send media">
                                <CameraAltIcon />
                            </label>
                        </div>
                        <div className={style.attach_item}>
                            <MicIcon />
                        </div>
                    </div>
                    <div className={style.sendForm_emoji}>
                        {
                            emojies.map((item, index) => <EmojiIcon {...item} key={index} />)
                        }
                    </div>
                    <div className={style.sendForm_submit}>
                        <button type="button">send</button>
                    </div>
                </div>
            </form>
            <div
                className={classnames(
                    style.sendForm_avatar,
                    style.sendForm_avatar_right
                )}
            >
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    )
};

export default SendForm;
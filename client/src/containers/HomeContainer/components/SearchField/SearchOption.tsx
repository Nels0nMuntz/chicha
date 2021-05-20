import React from 'react';
import { IUser } from '../../../../store/user/types';
import { Avatar } from '../../../../components';

import style from './SearchField.module.scss';


type SearchOptionType = {
    option: IUser
}

const SearchOption : React.FC<SearchOptionType> = ({ option }) => {  
    
    const { firstName, lastName, avatar } = option;

    return (
        <div className={style.optionWrapper}>
            <div className={style.optionAvatar}>
                <Avatar
                    firstName={firstName}
                    avatar={avatar}
                />
            </div>
            <div className={style.optionTitle}>
                <p>{`${firstName} ${lastName}`}</p>
            </div>
        </div>
    )
};

export default SearchOption;
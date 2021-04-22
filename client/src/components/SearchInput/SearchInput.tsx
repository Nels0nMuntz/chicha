import React from 'react';

import style from "./SearchInput.module.scss";


const SearchInput: React.FC = () => {
    return (
        <input
            className={style.search_input}
            type="text"
            placeholder="Search"
        />
    )
};

export default SearchInput;
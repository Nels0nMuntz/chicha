import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from '../../../../store';
import { CSSTransition } from 'react-transition-group';

import SearchOption from './SearchOption';
import { setSearchUsersAC } from '../../../../store/user/actions';
import { searchUsersThunk } from '../../../../store/user/thunks';
import { IUser } from '../../../../store/user/types';

import style from './SearchField.module.scss';
import './style.scss';


type SearchOptionsProps = {
    options: Array<IUser>
    open: boolean
};

const SearchField: React.FC = () => {

    const dispatch = useDispatch();
    const [value, setValue] = React.useState<string>('');
    const [open, setOpen] = React.useState(false);

    const options = useSelector(createSelector(
        (state: RootState) => state.user.search,
        users => users
    ));

    React.useEffect(() => { 
        if(!value) dispatch(setSearchUsersAC([]));
        else dispatch(searchUsersThunk(value));
    }, [value, dispatch]);

    return (
        <div className={style.wrapper}>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                type="text"
                placeholder='Search'
                className={style.search_input}
            />
            <SearchOptions
                options={options}
                open={open && !!options.length}
            />
        </div>
    )
};

const SearchOptions: React.FC<SearchOptionsProps> = ({ options, open }) => {
    return (
        <CSSTransition
            in={open}
            timeout={150}
            classNames='search-options'
            unmountOnExit
        >
            <div className={style.optionsWrapper}>
                <ul>
                    {options.map((option, i) => (
                        <li key={i}>
                            <SearchOption option={option}/>
                        </li>
                    ))}
                </ul>
            </div>
        </CSSTransition>
    )
};

export default SearchField;
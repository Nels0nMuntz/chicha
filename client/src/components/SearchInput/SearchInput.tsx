import React from 'react';
import { createSelector } from 'reselect';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';

import { searchUsersThunk } from '../../store/user/thunks';


const useStyles = makeStyles({
    root: {
        '&.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot': {
            padding: '0px 4px',
        },
        '& .PrivateNotchedOutline-legendLabelled-4 > span': {
            display: 'none'
        },
        '& .MuiAutocomplete-input.MuiInputBase-input': {
            height: 'initial',
            padding: '8px 26px 8px 5px',
            fontSize: '12px',
        },
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#F2F2F2',
            transition: 'background-color 0.125s linear',

            '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: '1px',
                borderRadius: '1px',
                borderColor: '#F2F2F2',
            },
            '&:hover fieldset': {
                borderColor: '#F2F2F2',
            },
            '&.Mui-focused': {
                backgroundColor: 'white',
                '& fieldset': {
                    borderColor: '#d9dbde',
                }
            },
        },
        '& .MuiFormLabel-root': {
            fontSize: '12px',
            transform: 'translate(30px, 12px) scale(1)',
            '&.Mui-focused': {
                display: 'none'
            }
        },
        '& .MuiSvgIcon-root': {
            fontSize: '22px',
            transform: 'scale(-1, 1)',
            opacity: '0.5',
        }
    }
});

const SearchInput: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');

    const classes = useStyles();
    const dispatch = useDispatch();
    const isLoading = useSelector((state: RootState) => state.loading.isloading);
    const options = useSelector(createSelector(
        (state: RootState) => state.user.search,
        (users) => {
            return users.map(user => user.lastName)
        }
    ));

    // const onChangeAutocomplete = (event: React.ChangeEvent<{}>, value: string | null, reason: any) => {
    //     console.log(value);
    //     setInput(value)
    // }

    const onChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        console.log(value);
        // if (value === '' || value === null) return;        
        setValue(value);
    };

    React.useEffect(() => {
        console.log(value);
        // if
        dispatch(searchUsersThunk(value));
    }, [value, dispatch]);

    return (
        <Autocomplete
            value={value}         
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onBlur={() => setValue('')}
            options={options}
            getOptionLabel={(option: string) => option}
            getOptionSelected={(option: string, value: string) => true}
            renderOption={(option: string) => option}
            loading={isLoading}
            popupIcon={false}
            className={classes.root}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    variant="outlined"
                    onChange={onChangeField}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                            </React.Fragment>
                        ),
                        startAdornment: <SearchIcon />
                    }}
                />
            )}
        />
    )
};

export default SearchInput;
import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import style from "./SearchInput.module.scss";

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

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<string[]>([]);
    const loading = open && options.length === 0;

    return (
        <Autocomplete
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onFocus={() => setOptions(['option 1', 'option 2'])}
            options={options}
            loading={loading}
            popupIcon={false}
            className={classes.root}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            </React.Fragment>
                        ),
                        startAdornment: <SearchIcon/>
                    }}
                />
                // <FormControl>
                //     <InputLabel htmlFor="my-input" variant="outlined">Email address</InputLabel>
                //     <Input id="my-input" aria-describedby="my-helper-text" />
                // </FormControl>
            )}
        />

        // <input
        //     className={style.search_input}
        //     type="text"
        //     placeholder="Search"
        // />
    )
};

export default SearchInput;
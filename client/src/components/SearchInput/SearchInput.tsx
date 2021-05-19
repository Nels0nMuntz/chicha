import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import style from "./SearchInput.module.scss";

const useStyles = makeStyles({
    root: {
        '&.MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
            paddingRight: '9px'
        },
        '& .MuiFormLabel-root': {
            display: 'none',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#DDDDDD',
            },
            '&:hover fieldset': {
                borderColor: '#B8B8B8',
            },
            '&.Mui-focused fieldset': {
                display: '#4CA5FF',
            },
        },
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
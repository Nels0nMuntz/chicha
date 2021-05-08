import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';


type MainButtonPropsType = {
    text: string
    type: "button" | "submit" | "reset" | undefined
    isLoading: boolean
};

const Button = styled.button`
    position: relative;
    width: 100%;
    padding: 20px;
    margin-top: 5px;
    min-height: 57px;
    background-color: ${props => props.theme.bgcolor};
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    color: white;
    text-transform: uppercase;
    border-radius: 4px;
    transition: background-color 0.125s linear;
    cursor: ${props => props.theme.cursor};
    &:hover{
        background-color: ${props => props.theme.bgcolorHover};
    }
`;

Button.defaultProps = {
    theme: {
        bgcolor: "#4CA5FF",
        bgcolorHover: "#559DE7",
        cursor: "pointer",
    }
};

const theme = {
    main: {
        bgcolor: "#4CA5FF",
        bgcolorHover: "#559DE7",
        cursor: "pointer",
    },
    disabled: {
        bgcolor: "#A3A3A3",
        bgcolorHover: "#A3A3A3",
        cursor: "auto"
    },
    loading: {
        bgcolor: "#4CA5FF",
        bgcolorHover: "#4CA5FF",
        cursor: "auto",
    },
};

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-10px 0 0 -10px"
    }
});

const MainButton: React.FC<MainButtonPropsType> = ({ text, type, isLoading }) => {

    const isDisabled = type === "button" ? true : false;

    const classes = useStyles();

    return (
        <ThemeProvider theme={isDisabled ? theme.disabled : isLoading ? theme.loading : theme.main}>
            <Button
                type={type}
            >
                {isLoading ? (
                    <CircularProgress
                        className={classes.root}
                        size={22}
                        color="inherit"
                    />
                ) : text}
            </Button>
        </ThemeProvider>
    );
};

export default MainButton;

import React from 'react';
import styled from 'styled-components';


type MainButtonPropsType = {
    type: "button" | "submit" | "reset" | undefined
    text: string
}

const Button = styled.button`
    width: 100%;
    padding: 20px;
    margin-top: 5px;
    background-color: #4CA5FF;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
    color: white;
    text-transform: uppercase;
    border-radius: 4px;
    transition: background-color 0.125s linear;
    &:hover{
        background-color: #559de7;
    }
`;

const MainButton: React.FC<MainButtonPropsType> = ({ type, text }) => {
    return (
        <Button type={type}>
            {text}
        </Button>
    );
};

export default MainButton;

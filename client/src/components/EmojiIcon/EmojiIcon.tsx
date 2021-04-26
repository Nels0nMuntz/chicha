import React from 'react';
import styled from 'styled-components';


type EmojiIconType = {
    symbol: string
    label: string
}

const Emoji = styled.span`
    display: inline-block;
    font-size: 18px;
    padding: 4px;
    cursor: pointer;
    bacground-color: white;
    transition: background-color 0.1s linear;
    float: left;
    &:hover{
        background-color: #edf2f5;
    }
`;

const EmojiIcon: React.FC<EmojiIconType> = ({ symbol, label }) => {
    return (
        <Emoji
            role="img"
            aria-label={label ? label : ""}
            aria-hidden={label ? "false" : "true"}
            title={label}
        >
            {symbol}
        </Emoji>
    )
};

export default EmojiIcon;
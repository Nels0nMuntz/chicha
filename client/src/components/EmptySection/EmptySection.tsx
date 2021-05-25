import React from 'react';
import styled from 'styled-components';

import emptyIcon from '../../assets/images/empty.svg';

const Wrapper = styled.div`
    width: 100%;
    & img{
        width: 100px;
        height: 100px;
        margin: 0px auto;
    }
    & span{
        width: 100%;
        display: inline-block;
        padding: 0px 15px;
        text-align: center;
        opacity: 0.75;
    }
`;

type EmptySectionProps = {
    text?: string
};

const EmptySection : React.FC<EmptySectionProps> = ({ text }) => {
    return (
        <Wrapper>
            <img src={emptyIcon} alt="empty" />
            <span>{text}</span>
        </Wrapper>
    )
};

export default EmptySection;
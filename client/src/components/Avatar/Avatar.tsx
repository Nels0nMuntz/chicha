import React from 'react';
import styled, {  } from 'styled-components';
import { generateAvatar } from '../../shared';


const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%; 
    & .circle-form{
        width: 100%;
        height: 100%; 
        border-radius: 50%;
    }
    & > img{       
        object-fit: cover;
    };
    & > div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: 700;
        color: white;
        background: ${props => `linear-gradient(135deg, ${props.color}, ${props.color}55)`};
    }
`;

type AvatarProps = {
    firstName: string
    avatar?: string
    size?: string
};

const Avatar: React.FC<AvatarProps> = ({ firstName, avatar, size }) => {

    const hasAvatar = !!avatar;
 
    return (
        <Wrapper
            color={!hasAvatar ? generateAvatar(firstName) : undefined}
        >
            {hasAvatar ? (
                <img className="circle-form" src={avatar} alt="avatar"/>
            ) : (
                <div className="circle-form"><span>{firstName[0]}</span></div>
            )}
            <span></span>
        </Wrapper>
    );
};

export default Avatar;
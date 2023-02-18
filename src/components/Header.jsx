import React from 'react';
import styled from 'styled-components';
import { BiHeart } from "react-icons/bi";
import { BiStar } from "react-icons/bi";




const HeaderArea = styled.div`
    background: #F8CBA6;
    width: 100%;
    height: 4.25rem;
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const HeaderLogo = styled.div`
   
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.1rem;
    height: 2rem;
    gap: 1.25rem;
    > h3{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 3rem;
    }
    >h3:hover{
        background: white;
        border-radius: 2rem;
        
    }
`;





function Header() {
    return (
        <HeaderArea>
            <HeaderLogo><BiStar style={{
                width: '2rem',
                height: "2rem",
            }} /></HeaderLogo>
            <HeaderLogo>
                <h2>StarLog</h2>
            </HeaderLogo>
            <HeaderLogo>
                <h3>LogIn</h3>
                <h3>SignUp</h3>
            </HeaderLogo>
        </HeaderArea>
    )
}

export default Header
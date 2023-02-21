import React from 'react';
import styled from 'styled-components';
import { BiHeart } from "react-icons/bi";
import { BiStar } from "react-icons/bi";




const HeaderArea = styled.div`
    position: fixed;
    top: 0;
    background: #222831;
    width: 100%;
    height: 4.25rem;
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;

  
`;

const HeaderLogo = styled.div`
     background: #222831;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.1rem;
    height: 2rem;
    gap: 1.25rem;
    > h2 {
        background: #222831;
        font-weight: 700;
        text-shadow: 2px 2px 2px gray;
    };
    > h2:hover {
        font-weight: 800;
        background: white;
    }
    > h3{
        background: #222831;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 3rem;
       
    }
    >h3:hover{
        background: white;
        border-radius: 2rem;
        color: #222831;
        
    }
`;





function Header() {
    return (
        <HeaderArea>
            <HeaderLogo><BiStar style={{
                width: '2rem',
                height: "2rem",
                background: "#222831"
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
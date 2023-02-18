import React from 'react'
import styled from 'styled-components'
import DefailtButton from './Button';
// 아이콘 불러오기 
import { BiHeart } from "react-icons/bi";
import { BiPlus } from "react-icons/bi"



const SideBar = styled.div`
    position: fixed;
    left: 8rem;
    top: 20rem;
    background: white;
    width: 75px;
    height: 150px;
    background: #F8CBA6;
    border-radius: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap :0.9rem;
    z-index: 10;

`;



function Sidebar() {
    return (
        <SideBar>
            <DefailtButton sideBtn><BiPlus style={{
                width: "1.4rem",
                height: "1.5rem"
            }} /></DefailtButton>

        </SideBar>
    )
}

export default Sidebar

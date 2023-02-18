import React from 'react'
import styled from 'styled-components'
import DefailtButton from './Button';



const SideBar = styled.div`
    position: fixed;
    left: 15rem;
    top: 20rem;
    bottom: 15rem;
    left: 10rem;
    background: white;
    width: 4.375rem;
    height: 9.375rem;
    background: #F8CBA6;
    border-radius: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap :20px;

`;



function Sidebar() {
    return (
        <SideBar>
            <DefailtButton sideBtn>dd</DefailtButton>
            <DefailtButton sideBtn>dd</DefailtButton>
        </SideBar>
    )
}

export default Sidebar

import React from 'react';
import styled from 'styled-components';

const HeaderArea = styled.div`
    background: #F8CBA6;
    width: 100%;
    height: 4.25rem;
    border-bottom-left-radius: 2.5rem;
    border-bottom-right-radius: 2.5rem;
    display: flex;
    justify-content: space-around;
`;
const HeaderLogo = styled.div`
    background: white;
    
`;





function Header() {
    return (
        <HeaderArea>
            <HeaderLogo>dd</HeaderLogo>
        </HeaderArea>
    )
}

export default Header
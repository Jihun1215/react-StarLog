import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <LoginLayout>

            <LoginArea>
                <LoginAreaLogo>⭐️STAR LOG</LoginAreaLogo>

                <LoginAreaInputBox></LoginAreaInputBox>

                <LoginAreaButton></LoginAreaButton>

                <LoginAreaGoToSignUP></LoginAreaGoToSignUP>
            </LoginArea>

        </LoginLayout>
    )
}

export default Login



const LoginLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginArea = styled.div`
    width: 43.75rem;
    height: 46.875rem;
    border: 2px solid black;
    border-radius: 1.25rem;
    margin: 1.5625rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 33px 0;
`;

const LoginAreaLogo = styled.div`
    width: 15.625rem;
    height: 4.6875rem;
    border: 2px solid black;
    border-radius: 1.25rem;
    margin-left: 100px;
`;

const LoginAreaInputBox = styled.div`
    width: 31.25rem;
    height: 25rem;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 1.25rem;
`;

const LoginAreaButton = styled.div`
    width: 25rem;
    height: 4.375rem;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 1.25rem;
`

const LoginAreaGoToSignUP = styled.div`
    width: 12.5rem;
    height: 2.5rem;
    border: 2px solid black;
    border-radius: 1.25rem;
    
`;
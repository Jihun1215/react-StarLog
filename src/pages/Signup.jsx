import React from 'react'
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import useInput from '../Hook/useInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Cookies } from 'react-cookie';


function Signup() {
    const navigate = useNavigate();
    const moveToLogin = () => navigate('/login');

    const [id, onChangeIdHandelr, setId] = useInput();
    const [pw, onChangePWHandelr, setPW] = useInput();




    const SignUpFrom = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://3.38.191.164/register', { id: id, password: pw });
            console.log('response:', response)


        }
        catch (error) {
            console.log(error)
            alert('오류 발생! ')
        }

        setId('');
        setPW('');
    }




    return (
        <>
            <Header />
            <LoginLayout>

                <LoginArea onSubmit={SignUpFrom}>
                    <LoginINBox>
                        <LoginAreaLogo>
                            <h2>⭐️STAR LOG SIGN UP</h2></LoginAreaLogo>

                        <LoginAreaInputBox>


                            <LoginEachInput>
                                <p>아이디</p>
                                <input
                                    type="text"
                                    placeholder='ID 입력해주세요!'
                                    value={id}
                                    onChange={onChangeIdHandelr} />
                            </LoginEachInput>
                            <LoginEachInput>
                                <p>비밀번호</p>
                                <input
                                    type="password"
                                    placeholder="PW 입력해주세요!"
                                    value={pw}
                                    onChange={onChangePWHandelr} />
                            </LoginEachInput>

                        </LoginAreaInputBox>

                        <LoginAreaButton>
                            <button type='submit'>화원가입하기! </button>
                        </LoginAreaButton>

                        <LoginAreaGoToSignUP onClick={moveToLogin}>로그인 하러 가기</LoginAreaGoToSignUP>
                    </LoginINBox>
                </LoginArea>

            </LoginLayout>
            <Footer />
        </>
    )
}

export default Signup



const LoginLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginArea = styled.form`
    width: 43.75rem;
    height: 40.625rem;
    border: 3px solid black;
    border-radius: 1.25rem;
    margin: 5.3125rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 33px 0;
`;

const LoginINBox = styled.div`
    width: 500px;
    height: 95%;
    /* border: 2px solid black; */
    gap: 1.5625rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
`;



const LoginAreaLogo = styled.div`
    width: 15.625rem;
    height: 4.6875rem;
    border: 2px solid black;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginAreaInputBox = styled.div`
    width: 31.25rem;
    height: 25rem;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5625rem 0;
   
`;


const LoginEachInput = styled.div`
    width: 21.875rem;
    height: 6.25rem;
    border-radius: 1.25rem;
    border: 2px solid black;  
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: .625rem 0;
    > p {
       font-size: 1.15rem;
       
    };
    > input {
        width: 15.625rem;
        height: 1.875rem;
        background: #fff;
        border-radius: .625rem;
        padding-left: 1.25rem;
    };
`;




const LoginAreaButton = styled.div`
    width: 25rem;
    height: 4.375rem;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > button {
        width: 12.5rem;
        height: 3.125rem;
        background: #fff;
        border-radius: 1.25rem;
    }
`;

const LoginAreaGoToSignUP = styled.div`
    width: 12.5rem;
    height: 2.5rem;
    border: 2px solid black;
    border-radius: 1.25rem; 
    margin-left: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
`;



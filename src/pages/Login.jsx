import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import useInput from '../Hook/useInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Btn from '../components/common/Button'
import Cookies from 'js-cookie';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { jwtserver } from '../axios/api'

function Login() {

    const navigate = useNavigate();

    const getToken = Cookies.get('token');

    // 토큰이 있을시 
    useEffect(() => {
        if (getToken) {
            alert('로그인 유지중입니다.');
            navigate('/');
        }
    }, [navigate, getToken]);

    const moveToSignup = () => navigate('/signup');



    const [id, onChangeLoginIdInputHandler, setId] = useInput();
    const [pw, onChangeLoginPwInputHandler, setpw] = useInput();

    // const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    // let success = false;







    // const logInUser = async (e) => {
    //     e.preventDefault();
    //     await axios
    //         .post('http://3.38.191.164/login', { id: id, password: pw })
    //         .then((response) => {
    //             // 이걸 이용해서 값을  넣었다람쥐 
    //             setCookie('userToken', response.data.token);
    //             // success = !success;
    //         })
    //         .catch(() => {
    //             alert('에러');
    //         });
    // };




    const LoginFormHandler = async (e) => {
        e.preventDefault();
        const expiryDate = new Date(Date.now() + 10 * 60 * 1000);
        // 로그인 성공 시 
        try {
            const response = await jwtserver.post('/login', { id: id, password: pw });
            // 쿠키이름 토큰
            const { token } = response.data;
            Cookies.set('token', token, { expires: expiryDate });
            navigate('/');
            // setCookie('userToken', response.data.token);
            // alert('로그인 성공!')
            // success = !success;
        }
        // 실패시 
        catch (error) {
            alert(`${error.response.data.message}`);
        }
        setId('');
        setpw('');
    }


    return (
        <>
            <Header />
            <LoginLayout>

                <LoginArea onSubmit={LoginFormHandler}>
                    <LoginINBox>
                        <LoginAreaLogo>
                            <h2>⭐️STAR LOG LOGIN</h2></LoginAreaLogo>

                        <LoginAreaInputBox>


                            <LoginEachInputBox>
                                <p>아이디</p>
                                <LoginEachInputBoxInputArea>
                                    <input
                                        type="text"
                                        placeholder='ID 입력해주세요!'
                                        value={id}
                                        onChange={onChangeLoginIdInputHandler} />
                                    <div><FaUserAlt /></div>

                                </LoginEachInputBoxInputArea>

                            </LoginEachInputBox>


                            <LoginEachInputBox>

                                <p>비밀번호</p>
                                <LoginEachInputBoxInputArea>
                                    <input
                                        type="password"
                                        placeholder="PW 입력해주세요!"
                                        value={pw}
                                        onChange={onChangeLoginPwInputHandler} />
                                    <div><FaLock /></div>
                                </LoginEachInputBoxInputArea>

                            </LoginEachInputBox>

                        </LoginAreaInputBox>

                        <LoginAreaButton>
                            <Btn type='submit'
                                loginbtn>로그인 하기</Btn>
                        </LoginAreaButton>

                        <LoginAreaGoToSignUP onClick={moveToSignup}>회원가입하러 가기</LoginAreaGoToSignUP>
                    </LoginINBox>

                </LoginArea>
        
            </LoginLayout>
            <Footer />
        </>
    )
}

export default Login



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


const LoginAreaButton = styled.div`
    width: 25rem;
    height: 4.375rem;
    margin: 0 auto;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
 
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




const LoginEachInputBox = styled.div`
    position: relative;
    width: 21.875rem;
    height: 6.875rem;
    border-radius: 1.25rem;
    border: 2px solid black;  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: .625rem 0;
    
    > p {  
        padding-top: .3125rem;
    };
    > span {
        color: #45f3ff;
    }
   
  `;

const LoginEachInputBoxInputArea = styled.div`
position: relative;
width: 90%;
height: 40%;

> input {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-left: 1.875rem;
    border: none;
    outline: none;
    border-bottom : 2px solid black;
    color: #fff;
}
> div {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
`

import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';



function Signup() {
    const navigate = useNavigate();
    const moveToLogin = () => navigate('/login');

    const [inputname, setInputName] = useState('');
    const [inputID, setInputID] = useState('');
    const [inputPW, setInputPW] = useState('');


    // 오류 메세지
    const [nameMessage, setNameMessage] = useState('');
    const [idMessage, setIdMessage] = useState('');
    const [pwMessage, setPwMessage] = useState('');

    // 유효성 검사 둘다 true 일시 버튼 클릭 가넝
    const [isName, setIsName] = useState(false);
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false);


    const NameonChangeHandler = (e) => {
        setInputName(e.target.value)
        const NameReExp = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,6}$/;
        if (!NameReExp.test(e.target.value)) {
            setNameMessage('영문이나 한글로 2 ~ 6자로 입력해주세요')
            setIsName(false)
        } else {
            setNameMessage('사용 가능한 닉네임입니다')
            setIsName(true)
        }
    }

    const IDonChangeHandler = (e) => {
        setInputID(e.target.value);
        const IdReExp = /^(?=.*[a-z0-9])[a-z0-9]{5,11}$/;
        if (!IdReExp.test(e.target.value)) {
            setIdMessage('영문이나 숫자로 6 ~ 10자로 입력해주세요');
            setIsId(false);
        } else {
            setIdMessage('사용 가능한 이메일 입니다.');
            setIsId(true);
        }
    }

    const PWonChangeHandler = (e) => {
        setInputPW(e.target.value);
        const IdReExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,12}$/;
        if (!IdReExp.test(e.target.value)) {
            setPwMessage('영문과 숫자 조합으로 8 ~ 12자로 입력해주세요')
            setIsPw(false);
        } else {
            setPwMessage('사용 가능한 비밀번호 입니다.');
            setIsPw(true);
        }
    }

    const SignUpFrom = async (e) => {
        e.preventDefault();
        if (isName === true && isId === true && isPw === true) {
            
            try {
                await axios.post('http://3.38.191.164/register', { id: inputID, password: inputPW });
                // console.log('response:', response)
                alert('회원가입 성공');
            }
            catch (error) {
                alert(error.response.data.message);
          
            }
            setInputName('');
            setInputID('');
            setInputPW('');
        } else {
            alert('아이디와 비밀번호를 조건에 맞게 입력해주세요')
        }
    }


    // const navigate = useNavigate();

    // const moveRegistrationPg = () => {
    //     navigate(-1);
    // };




    return (
        <>
            <Header />
            <LoginLayout>

                <LoginArea onSubmit={SignUpFrom}>
                    <LoginINBox>

                        <LoginAreaLogo>
                            <h2>⭐️SIGN UP</h2></LoginAreaLogo>

                        <LoginAreaInputBox>

{/* 유저인풋 */}
                            <LoginEachInputBox>


                                <p>유저이름</p>

                            <LoginEachInputBoxInputArea>

                                <input
                                    type="text"
                                    placeholder='닉네임 입력해주세요!'
                                    value={inputname}
                                    onChange={NameonChangeHandler}
                                />
                                <div> <FaUserAlt /> </div>
                                </LoginEachInputBoxInputArea>

                                <span>  {nameMessage}</span>
                            </LoginEachInputBox>

         {/* 아이디 */}
                            <LoginEachInputBox>

                                <p>아이디</p>
                        <LoginEachInputBoxInputArea>
                             <input
                                type="text"
                                placeholder='ID 입력해주세요!'
                                value={inputID}
                                onChange={IDonChangeHandler} />
                                <div> <FaUserAlt /> </div>
                        </LoginEachInputBoxInputArea>
                        <span>  {idMessage}</span>



                               
                            </LoginEachInputBox>

            {/* 비밀번호 */}
                            <LoginEachInputBox>

                                <p>비밀번호</p>
                                <LoginEachInputBoxInputArea>
                                <input
                                    type="password"
                                    placeholder="PW 입력해주세요!"
                                    value={inputPW}
                                    onChange={PWonChangeHandler} />
                                    <div> <FaLock /> </div>
                                    </LoginEachInputBoxInputArea>
                                <span>  {pwMessage}</span>
                            </LoginEachInputBox>


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
    height: 3.125rem;
    border: 2px solid black;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginAreaInputBox = styled.div`
    width: 31.25rem;
    height: 40.625rem;
    margin: 0 auto;
    border: 2px solid black;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5625rem 0;
   
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
    height: 60%;

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






// const IputIN = styled.div`
//     position: relative;
//     width: 90%;
//     height: 60%;

//     > input {
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         padding-left: 1.875rem;
//         border: none;
//         outline: none;
//         border-bottom : 2px solid black;
//         color: #fff;
//     }
//     > div {
//         position: absolute;
//         top: 50%;
//         left: 0;
//         transform: translateY(-50%);
//     }
// `

// // > input {
//     position: absolute;
//     width: .625rem;
//     height: 2.5rem;
//     background: #fff;
//     padding-left: 1.25rem;
//     border-radius: 1.25rem;
    
//   };
//   > div { 
//    position: absolute;
//   width: 14px;
//   top: 40%;
//   left: 10%;
//   transform: translateX(-50%);
//   };
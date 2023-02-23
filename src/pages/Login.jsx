import React, { useEffect } from 'react'
import styled from 'styled-components'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import useInput from '../Hook/useInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Btn from '../components/common/Button'

function Login() {
    const navigate = useNavigate();
    const moveToSignup = () => navigate('/signup');



    const [id, onChangeLoginIdInputHandler, setId] = useInput();
    const [pw, onChangeLoginPwInputHandler, setpw] = useInput();

    const [cookies, setCookie, removeCookie] = useCookies(['id']);
    // let success = false;
    console.log(cookies.userToken)



    // const logInUser = async (e) => {
    //     e.preventDefault();
    //     await axios
    //         .post('http://3.38.191.164/login', { id: id, password: pw })
    //         .then((response) => {
    //             // 이걸 이용해서 값을  넣었다람쥐 
    //             setCookie('userToken', response.data.token);
    //             success = !success;
    //         })
    //         .catch(() => {
    //             alert('에러');
    //         });
    // };



    const LoginFormHandler = async (e) => {
        e.preventDefault();
        // 로그인 성공 시 
        try {
            const response = await axios.post('http://3.38.191.164/login', { id: id, password: pw });
            // 쿠키이름 토큰
            setCookie('id', response.data.token);
            alert('로그인 성공!')
            // success = !success;

        }
        // 실패시 
        catch (error) {
            alert('잘못된로그인시도')
        }

        setId('');
        setpw('');
    }



    const authCheck = () => { // 페이지에 들어올때 쿠키로 사용자 체크
        const token = cookies.id; // 쿠키에서 id 를 꺼내기
        axios
            .get('http://3.38.191.164/user', { token: token }) // 토큰으로 서버에 인증 요청
            .then((res) => {
                setId(res.data.id); // 유저 아이디 표시를 위해 작성
            })
            .catch(() => {
                // logOut(); // 에러 발생시 실행
            });
    };

    // useEffect(() => {
    //     authCheck(); // 로그인 체크 함수
    // });

    // const logOut = () => {
    //     removeCookie('id'); // 쿠키를 삭제
    //     // navigate('/'); // 메인 페이지로 이동
    // };




    // const userCheck = async () => {
    //     const token = cookies;
    //     console.log(token)
    //     await axios
    //         .get('http://3.38.191.164/user', {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             },
    //         })
    //         .then((response) => {
    //             alert(response.data.message)
    //         })
    //         .catch(() => {
    //             removeCookie('userToken')
    //             alert('checkCookie error');

    //         })
    // }


    return (
        <>
            <Header />
            <LoginLayout>

                <LoginArea onSubmit={LoginFormHandler}>
                    <LoginINBox>
                        <LoginAreaLogo>
                            <h2>⭐️STAR LOG LOGIN</h2></LoginAreaLogo>

                        <LoginAreaInputBox>


                            <LoginEachInput>
                                <p>아이디</p>
                                <input
                                    type="text"
                                    placeholder='ID 입력해주세요!'
                                    value={id}
                                    onChange={onChangeLoginIdInputHandler} />
                            </LoginEachInput>
                            <LoginEachInput>
                                <p>비밀번호</p>
                                <input
                                    type="password"
                                    placeholder="PW 입력해주세요!"
                                    value={pw}
                                    onChange={onChangeLoginPwInputHandler} />
                            </LoginEachInput>

                        </LoginAreaInputBox>

                        <LoginAreaButton>
                            <Btn type='submit'
                                loginbtn>로그인 하기</Btn>
                        </LoginAreaButton>

                        <LoginAreaGoToSignUP onClick={moveToSignup}>회원가입하러 가기</LoginAreaGoToSignUP>
                    </LoginINBox>

                </LoginArea>
                {/* onClick={logOut} */}
                <Btn  >ㅇㅇㅇㅇㅇㅇㅇㅇㅇ</Btn>
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



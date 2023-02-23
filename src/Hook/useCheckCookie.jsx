// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
// // import { useCookies } from 'react-cookie';




// const useCheckCookie = () => {
//     const navigate = useNavigate();

//     // const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
//     // const token = cookies.get('userToken');
//     console.log(token)




//     useEffect(() => {
//         // 토큰이 없을 시 
//         if (!token) {
//             alert('로그인이 필요합니다!')
//             navigate('/')
//         } else {
//             checkToken();
//         }
//     }, [navigate, token])

//     // 토큰 체크 함수
//     const checkToken = async (token) => {
//         try {
//             await axios.get('http://3.38.191.164/user', {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//         }
//         catch (error) {
//             if (error.response.status === 401) {
//                 alert('토큰이 만료되었거나 없습니다. 로그인 해주세요!');
//                 removeCookie('userToken')
//                 navigate('/login');
//             }

//             // await axios
//             //     .get('http://3.38.191.164/user', {
//             //         headers: {
//             //             Authorization: `Bearer ${token}`,
//             //         },
//             //     })
//             //     // 토큰이 있을시 
//             //     .then((response) => {
//             //         alert(response.data.message);
//             //         navigate('/')
//             //     })
//             //     .catch(() => {
//             //         removeCookie('userToken')
//             //     })
//         }

//         return [token]


//     }
// }
// export default useCheckCookie
import axios from "axios";

// 인스턴스 
// project 생산성 증가, 코드 가독성 증가 ! 
// 각 사황에 맞게 커스텀 해주면 좋다 .! 
// 토큰이 필요할 경우에는 토큰을 넘겨준다는 것 처럼 ~ 
export const instance = axios.create({
    // `${process.env.React_APP_SERVER_URL}`,
    baseURL: `${process.env.React_APP_SERVER_URL}`,
    // 우리가 요청을 보낼떄 몇 초이상 기다리게하면 오류 낼거야라는 1 === 0.001초 의미

});

export const jwtserver = axios.create({
    baseURL: process.env.React_APP_URL,
});


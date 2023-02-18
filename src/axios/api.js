import axios from "axios";


const instance = axios.create({
    // `${process.env.React_APP_SERVER_URL}`,
    baseURL: `${process.env.React_APP_SERVER_URL}`,
    // 우리가 요청을 보낼떄 몇 초이상 기다리게하면 오류 낼거야라는 1 === 0.001초 의미

});

export default instance
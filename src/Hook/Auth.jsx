import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const useAuthorization = () => {
    const navigate = useNavigate();
    const token = Cookies.get('token');

    useEffect(() => {
        if (!token) {
            alert('로그인이 필요합니다');
            navigate('/login');
        } else {
            authCheck();
        }
    }, [navigate, token]);

    const authCheck = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_MOCK_URL} / user`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            if (error.response.status === 401) {
                alert('토큰이 만료되었거나 없습니다. 로그인 해주세요!');
                Cookies.remove('token');
                navigate('/login');
            }
        }
    };

    return [token];
};

export default useAuthorization;

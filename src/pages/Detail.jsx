import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header'
import Btn from '../components/Button';
import api from "../axios/api"



// 상세보기에서 수정과 삭제를 해야 한다 


function Detail() {
    // Todo에서 상세보기를 누르면 그거에 객체를 보내준다 
    const { state } = useLocation();
    console.log(state)
    // navigate훅을 이용해서 돌아가기 구현 
    const navigate = useNavigate();

    const [posts, setPosts] = useState(null);

    // 조회 함수
    const fetchTodos = async () => {
        // const { data } = await axios.get("http://localhost:4001/todos");
        const { data } = await api.get('/posts')
        setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
    };
    console.log(posts)

    useEffect(() => {
        fetchTodos();
    }, [posts]);

    // 삭제 함수 
    // 삭제를 해야 하니 인자 값으로 어떤걸 삭제 해야 되는지를 알려줘야 한다 
    const onDeleteButtonClickHandler = async (id) => {
        // axios.delete(`http://localhost:4001/todos/${id}`);
        api.delete(`/posts/${id}`)
        // 삭제되고 렌더링을 시키려면 어떻게 접근 해야 할까 ? 
        setPosts(posts.filter((item) => {
            return item.id !== id
        }))
    }





    return (
        <DeatailPageSize>
            <Header />
            <DetailpageArea>
                <img src={state.item.imageFile}>
                </img>
                {/* <h3>{state.item.id} 번호 </h3> */}
                <h3>{state.item.title} 제목 </h3>
                <h4>{state.item.body} 내용 </h4>
                {/* <h3>{state.item.title} 제목 </h3> */}

                <DetailPageWarp >
                    <p>id 번호</p>
                    <p>날짜</p>
                </DetailPageWarp>
            </DetailpageArea>
            {/* {
                state === null ? console.log('준비중인페이지입니다') : <PageSize></PageSize>
            } */}
            <div style={{
                display: 'flex',
            }}>
                <Btn onClick={(() => {
                    navigate('/')
                })}
                    gobackhome>되돌아가기</Btn></div>





            <Btn onClick={(() => {
                onDeleteButtonClickHandler(state.item.id)
                navigate('/')
            })}

                detaildetail>
                삭제하기
            </Btn>
        </DeatailPageSize >
    )
}

export default Detail



const DeatailPageSize = styled.div`
    max-width: 80rem;
    height: 52rem;
    margin: 1rem auto;
    background: #393E46;
    border-radius: 20px;
    justify-content: center;
`;

const DetailpageArea = styled.div`

    width : 37.5rem;
    height: 34.375rem;
    margin: 3.125rem auto;
    text-align: center;
    background: white;
    border-radius: 1.25rem;
    > img {
        width : 37.5rem;
        height: 21.875rem;
        border-top-left-radius: 1.25rem;
        border-top-right-radius: 1.25rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    };
    > h3 {
        width: 20rem;
        height: 2.8125rem;
        border: 1px solid red;
        margin: .625rem auto;
    } h4 {
        width: 20rem;
        height: 5.625rem;
        border: 1px solid blue;
        margin: 0 auto;
        padding-top: 1rem
    }
`;

const DetailPageWarp = styled.div`
    margin: 10px auto;
    width: 20rem;
    display: flex;
    gap: 1.25rem;
    > p {
        width: 9.375rem;
        height: 1.25rem;
        border: 1px solid red;
    }
`



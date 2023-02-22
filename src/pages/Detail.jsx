import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/common/Header'
import Btn from '../components/common/Button';
import Sidebar from "../components/Deatil/DeatilSidebar"
import Footer from '../components/common/Footer';
import { __getPosts } from '../redux/modules/PostsSlice';
import { useSelector, useDispatch } from 'react-redux';

// 상세보기에서 수정과 삭제를 해야 한다 

function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    // 구조분해 할당으로 todoSlice에 값들을 가져온다 
    const postslist = useSelector(state => state.Posts.postslist)

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch]);

    const foundData = postslist.find((item) => item.id === Number(id));
    // console.log(foundData)

    // navigate훅을 이용해서 돌아가기 구현 
    const navigate = useNavigate();
    const moveToHome = () => navigate('/');

    return (
        <>
            {postslist.length !== 0 && (

                <DeatailPageSize>
                    {/* porps로 데이터 보내주기 */}
                    < Sidebar foundData={foundData} />
                    <Header />

                    <PostsArea>

                        <PostsAreaDiv1>
                            <img src={foundData.imageFile}></img>
                        </PostsAreaDiv1>

                        <PostsAreaDiv2>
                            <h2> {foundData.title} </h2>
                            <h3> {foundData.body} </h3>
                            <p>{foundData.user} 님 ! </p>
                        </PostsAreaDiv2>

                    </PostsArea>

                    <div style={{ display: 'flex', }}>
                        <Btn onClick={moveToHome}
                            gobackhome>되돌아가기</Btn></div>

                    <Footer detail />
                </DeatailPageSize >
            )}
        </>

    )
}

export default Detail


// 전체 사이즈 
const DeatailPageSize = styled.div`
    max-width: 80rem;
    height: 52rem;
    margin: 1rem auto;
    background: #393E46;


`;


const PostsArea = styled.div`
    width :50rem;
    height: 34.375rem;
    border: 2px solid black;
    margin: 6.25rem auto;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const PostsAreaDiv1 = styled.div`
    width: 48%;
    height: 95%;
    border: 2px solid black;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        width: 95%;
        height: 95%;
        border: 2px solid black;
        border-radius: 1.25rem;
    };
`;

const PostsAreaDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 48%;
    height: 95%;
    border: 2px solid black;
    color: #fff;
    border-radius: 1.25rem;
    gap: 1.1875rem 0;
    
    > h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid black;
        width: 80%;
        height: 3.75rem;
        border-radius: 1.25rem;
    };
    > h3 {
        padding: 1.5625rem;
        width: 80%;
        height: 18.75rem;
        border: 2px solid black;
    } ;
    > p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 3.125rem;
        border: 2px solid black;
    }
`;




const DetailpageArea = styled.div`
    border: 2px solid black;
    width : 50rem;
    height: 34.375rem;
    margin: 6.25rem auto;
    background: white;
    border-radius: 1.25rem;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    > img {
        width : 48%;
        height: 34.375rem;
        border-top-left-radius: 1.25rem;
        border-top-right-radius: 1.25rem;
        border-right: 1px solid gray;
       
    };
`;


const DeatilPageText = styled.div`
margin:  0 auto;
    > h3 {
        padding-top: 20px;
        width: 21.875rem;
        height: 2.8125rem;
        border: 1px solid red;
        margin: .625rem auto;
        padding: 10px;
    };
    > h4 {
        width: 21.875rem;
        height: 5.625rem;
        border: 1px solid blue;
        margin: 0 auto;
        
        padding: 10px;
    };
   
`;


// 댓글 공간
const DetailPageText2 = styled.div`
        margin: .9375rem;
        width: 21.875rem;
        height: 6.25rem;
        max-height: 20rem;
        border: 1px solid red;
        z-index: 5;
        padding: .625rem;
        
        
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



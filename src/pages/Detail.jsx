import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/common/Header'
import Btn from '../components/common/Button';
import Sidebar from "../components/Deatil/DeatilSidebar"
import Footer from '../components/common/Footer';
import { __getPosts } from '../redux/modules/PostsSlice';
import { useDispatch, useSelector } from 'react-redux';



// 상세보기에서 수정과 삭제를 해야 한다 


function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    // 구조분해 할당으로 todoSlice에 값들을 가져온다 
    const { isLoading, error, postslist } = useSelector(state => {
        return state.Posts
    })
    console.log(postslist)


    const foundData = postslist.filter((item) => {
        if (item.id == id) {
            return id
        }
    })
    console.log(foundData)
    const ThisData = foundData[0]

    // navigate훅을 이용해서 돌아가기 구현 
    const navigate = useNavigate();
    const moveToHome = () => navigate('/');

    return (
        <DeatailPageSize>
            <Sidebar ThisData={ThisData} />
            <Header />
            <DetailpageArea>
                <img src={ThisData.imageFile}>
                </img>





                <DeatilPageText>

                    <h3>작성자 : {ThisData.user}  </h3>
                    <h4>Title:  {ThisData.title} 제목 </h4>




                    <DetailPageText2>

                        <p>{ThisData.body} 내용</p>
                    </DetailPageText2>




                    <DetailPageWarp >
                        <p> ID:  {ThisData.id} 번 게시물 </p>
                        <p>23.02.19</p>
                    </DetailPageWarp>
                </DeatilPageText>
            </DetailpageArea>











            <div style={{
                display: 'flex',
            }}>
                <Btn onClick={moveToHome}
                    gobackhome>되돌아가기</Btn></div>




            {/* 
            <Btn onClick={(() => {
                onDeleteButtonClickHandler(state.item.id)
                navigate('/')
            })}

                detaildetail>
                삭제하기
            </Btn> */}
            <Footer detail />
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

`;

const DetailpageArea = styled.div`

    width :50rem;
    height: 34.375rem;
    margin: 3.125rem auto;

    background: white;
    border-radius: 1.25rem;
    
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    > img {
        width :25rem;
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



import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Posts from './Posts'
import { useDispatch, useSelector } from 'react-redux';
import { __getPosts } from '../../redux/modules/PostsSlice';
import { useNavigate } from 'react-router-dom';






// 기존값 데이터를 불러와서 여기서 타이터 바인딩 
function List() {

    const dispatch = useDispatch();


    // PostsSlice에 있는 초기값 가져오기 ! 
    const { isLoading, error, postslist } = useSelector(state => {
        // store에 있는 리듀서 함수명으로 해야 불러올수 있다
        return state.Posts
    })



    // 상세페이지 만들기 위해 
    const navigate = useNavigate();
    // usenavigate를 이용해서 item:id로 이동하고 
    // 이동하면서 item 값을 같이 보냄
    const onClickDeatilPage = (id) => {
        navigate(`/${id}`
        )
    }

    // 컴포넌트가 마운트 될 때만 이 함수를 호출할수 있게 
    useEffect(() => {
        dispatch(__getPosts())
    }, [])

    // todoSlice의 현재상태에 따라 보여줄것들 
    if (isLoading) {
        return <div>로딩 중...</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    // 2가지 방법 
    // db 저장 
    // 1. 리덕스로 db axios 성공이면 useEffec 에서 따라 해야됨 get 요청
    // 2. 리듀서 store에 추가 
    // 문제점 
    // 1. 문제점 리스트에 Item이 크면 성능화 이슈 깜빡임 이슈 useEffect 잘 활용해야 된다
    // 2. 






    return (
        <ListArea>
            {/* <PostArea1>
                <PostAreaInDiv1>
                    <div></div>
                </PostAreaInDiv1>

                <PostAreaInDiv2>
                    <h3>ddd</h3>
                    <p>Dasdasdasdasdasdasdasdasdasdasdasdasdasd
                        dasdasdasdasdasdasdasdas
                        asdasdasdasdasdasdasdasdasd
                        asdasdasdasdasdasdasdasdasdas
                        asdasdasdasdasdasdsad
                    </p>
                    <span>음지훈 님! </span>
                </PostAreaInDiv2>
            </PostArea1> */}
            {

                // React 는 렌더링이 화면에 커밋 된 후에야 모든 효과를 실행하기 때문이다.
                // 즉 React는 return에서 postslist.map(...)을 반복실행할 때 첫 턴에 데이터가 
                // 아직 안들어와도 렌더링이 실행되며 당연히 그 데이터는 undefined로 정의되어 오류가 나는 것이다.


                postslist && postslist.map((item) => {
                    return (
                        // onClick={onClickDeatilPage}
                        // onClick={(() => { onClickDeatilPage(item.id) })}
                        <PostArea
                            key={item.id}
                            onClick={(() => { onClickDeatilPage(item.id) })}
                        >
                            <PostAreaInDiv1>
                                <img src={item.imageFile} />
                            </PostAreaInDiv1>

                            <PostAreaInDiv2>
                                <h3>{item.title}</h3>
                                <p>{item.body} </p>
                                <span>{item.user} 님! </span>
                            </PostAreaInDiv2>

                        </PostArea>
                    )
                })
            }

        </ListArea>
    )
}

export default List

const PostArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50rem;
  height: 14.375rem;
  border: .1563rem solid black;
  border-radius: 1.25rem;
  background: #222831;
  margin-bottom: 3.125rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  gap: 10px;
  justify-content: center;
  align-items: center;
 
`;

const PostAreaInDiv1 = styled.div`
    width: 30%;
    height: 95%;
    border: 2px solid black;
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
    border: 1px solid black;
    width: 95%;
    height: 95%;
    background: #eee;
    border-radius: 1.25rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
 `;

const PostAreaInDiv2 = styled.div`
 width: 65%;
 height: 95%;
 border: 2px solid black;
 border-radius: 1.25rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 > h3 {
    margin: .625rem auto;
    width:  17.1875rem;
    height: 2.25rem;
    padding: .625rem;
    background: #EEEEEE;
    text-align: center;
    border-radius: 1.25rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
 };
 > p {
    margin: .625rem;
    padding: 1.25rem;
    width: 28.125rem;
    height: 6.25rem;
    border-radius: 1.25rem;
    background: #EEEEEE;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
 }
 > span {

    width: 8.0625rem;
    height: 1.125rem;
    background: #EEEEEE;
    border-radius: 1.25rem;
    text-align: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
 }
`;






const ListArea = styled.div`
    margin-top: 3.125rem;
    padding-top: 3.125rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* height 조정 필요 */
    gap: 5rem 10rem;
    justify-content: center;
 

`;

// const PostArea = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
  
//   width: 50rem;
//   height: 14.375rem;
//   border: .1563rem solid black;
//   border-radius: 1.25rem;
//   background: #222831;
//   margin-bottom: 3.125rem;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
//   gap: 10px;
// `;

// const WarpDiv = styled.div`
//     width: 80%;
//     height: 90%;
//     margin: .4688rem auto;
//     border-radius: 1.25rem;
//     gap: 20px;
// `


// const WrapImg = styled.img`
//     border: 1px solid black;
//     margin: 10px;
//     width: 12.5rem;
//     height: 11.25rem;
//     background: #eee;
//     border-radius: 1.25rem;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
// `;
// const WrapH3 = styled.h3`
//     margin: .625rem auto;
//     width: 25rem;
//     height: 2.625rem;
//     padding: .625rem;
//     background: #EEEEEE;
//     border-radius: 1.25rem;
//     box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
//     text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
// `;
// const WarpP = styled.p`
//   margin-bottom: .625rem;
//   padding: .625rem;
//   width: 34.375rem;
//   height: 6.25rem;
//   border-radius: 1.25rem;
//   background: #EEEEEE;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  

// `
// const WarpSpan = styled.p`

//   width: 8.0625rem;
//   height: 1.125rem;
//   background: #EEEEEE;
//   margin: 0 auto;
//   border-radius: 1.25rem;
//   text-align: center;
//   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
//   text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
// `



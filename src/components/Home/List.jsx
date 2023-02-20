import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Posts from './Posts'
import { useDispatch, useSelector } from 'react-redux';
import { __getPosts } from '../../redux/modules/PostsSlice';
import { useNavigate } from 'react-router-dom';






// 기존값 데이터를 불러와서 여기서 타이터 바인딩 
function List() {

    const dispatch = useDispatch();


    // 구조분해 할당으로 todoSlice에 값들을 가져온다 
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
    console.log(postslist)
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



    // // 조회 함수
    // const fetchPosts = async () => {
    //     // const { data } = await axios.get("http://localhost:4001/todos");
    //     const { data } = await api.get('/posts')
    //     setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
    // };
    // console.log(posts)

    // // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
    // useEffect(() => {
    //     // effect 구문에 생성한 함수를 넣어 실행합니다.
    //     fetchPosts();
    // }, []);



    return (
        <ListArea>
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
                            <div><WrapImg src={item.imageFile} /></div>

                            <div>
                                <WrapH3>{item.title}</WrapH3>
                                <WarpP>{item.body} </WarpP>
                                <WarpSpan>23.02.19</WarpSpan>
                            </div>

                        </PostArea>
                    )
                })
            }

        </ListArea>
    )
}

export default List

const ListArea = styled.div`
    padding-top: 3.125rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* height 조정 필요 */
    gap: 5rem 10rem;
    justify-content: center;

`;

const PostArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50rem;
  height: 12.5rem;
  border-radius: 1.25rem;
  background: white;
  margin-bottom: 3.125rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  
`;

const WrapImg = styled.img`
   margin: 10px;
    width: 12.5rem;
    height: 11.25rem;
    background: #eee;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const WrapH3 = styled.h3`
    margin: .625rem 0;
    width: 35.4375rem;
    height: 2.625rem;
    padding: .625rem;
    background: #EEEEEE;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
`;
const WarpP = styled.p`
  margin-bottom: .625rem;
  padding: .625rem;
  width: 35.375rem;
  height: 6.25rem;
  background: #EEEEEE;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  

`
const WarpSpan = styled.p`
  width: 8.0625rem;
  height: 1.125rem;
  background: #EEEEEE;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`



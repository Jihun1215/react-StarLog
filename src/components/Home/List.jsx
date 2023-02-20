import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Posts from './Posts'
import api from "../../axios/api"





// 기존값 데이터를 불러와서 여기서 타이터 바인딩 
function List() {
    const [posts, setPosts] = useState(null);
    console.log("List", posts)






    // 조회 함수
    const fetchPosts = async () => {
        // const { data } = await axios.get("http://localhost:4001/todos");
        const { data } = await api.get('/posts')
        setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
    };
    console.log(posts)

	// 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
    useEffect(() => {
        	// effect 구문에 생성한 함수를 넣어 실행합니다.
        fetchPosts();
    }, []);



    return (
        <ListArea>

            {
                posts?.map((item) => {
                    return (
                        <Posts key={item.id} item={item} />
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

`

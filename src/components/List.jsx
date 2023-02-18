import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Posts from './Posts'
import api from "../axios/api"


const ListArea = styled.div`
    padding-top: 3.125rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* height 조정 필요 */
    gap: 5rem 10rem;
    justify-content: center;

`


// 데이터에 map 돌려 P

// 기존값 데이터를 불러와서 여기서 타이터 바인딩 
function List() {
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
import React from 'react'
import styled from 'styled-components'
import Posts from './Posts'



const ListArea = styled.div`
    padding-top: 3.125rem;
    border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* height 조정 필요 */
    height: 100.5rem;
    gap: 5rem 10rem;
    justify-content: center;

`


// 데이터에 map 돌려 Posts 뿌리기

// 기존값 데이터를 불러와서 여기서 타이터 바인딩 
function List() {
    return (
        <ListArea>
            <Posts />
            <Posts />
        </ListArea>
    )
}

export default List
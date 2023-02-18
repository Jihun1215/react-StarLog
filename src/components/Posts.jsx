import React from 'react'
import styled from 'styled-components'

const POSTSAREA = styled.div`
  width: 21.875rem;
  height: 25rem;
  border-radius: 1.5625rem;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;


// 여기에서 데이터 받아서 바인딩

function Posts() {
    return (
        <POSTSAREA>이미지,타이틀,내용나오게 </POSTSAREA>
    )
}

export default Posts
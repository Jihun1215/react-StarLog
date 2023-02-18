import React from 'react'
import styled from 'styled-components'

const PostArea = styled.div`
  width: 21.875rem;
  height: 25rem;
  border-radius: 1.5625rem;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  > img {
    width: 21.875rem;
    height: 17.5rem;
    background: #eee;
  };
  > h3 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 1.3rem;
    font-family: bold;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
  };
  > p {
    padding: 1.625rem;
   
  }
  
`;
// const PostImg = styled.img`
//     width: 21.875rem;
//     height: 17.5rem;
//     background: #eee;
// `


// 여기에서 데이터 받아서 바인딩

function Posts(item) {
  console.log(item.item)
  return (

    <PostArea>
      <img src={item.item.viewUrl} />
      <h3>{item.item.title}</h3>
      <p>{item.item.body} </p>
    </PostArea>

  )
}

export default Posts
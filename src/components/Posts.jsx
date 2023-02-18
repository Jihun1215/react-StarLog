import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';




function Posts(item) {

  // 상세페이지 만들기 위해 
  const navigate = useNavigate();

  // usenavigate를 이용해서 item:id로 이동하고 
  // 이동하면서 item 값을 같이 보냄
  const onClickDeatilPage = () => {
    navigate(`/${item.item.id}`, {
      state: item
    })
  }


  // console.log(item.item)
  return (

    <PostArea onClick={onClickDeatilPage}>
      <div><WrapImg src={item.item.imageFile} /></div>

      <div>
        <WrapH3>{item.item.title}</WrapH3>
        <WarpP>{item.item.body} </WarpP>
        <WarpSpan>23.02.19</WarpSpan>

      </div>


    </PostArea>

  )
}

export default Posts


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
    border: 1px solid red;
`;
const WrapH3 = styled.h3`
    margin-top: .625rem;
    width: 35.4375rem;
    height: 2.625rem;
    padding: .625rem;
    border: 1px solid red;
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -3px 20px rgba(255,255,255,0.4);
`;
const WarpP = styled.p`
  margin-top: .3125rem;
  padding: .625rem;
  width: 35.375rem;
  height: 6.25rem;
  border: 1px solid red;
`
const WarpSpan = styled.p`
  margin-top: 1.25rem;
  width: 8.0625rem;
  height: 1.125rem;
  border: 1px solid red;

`

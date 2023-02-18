import React from 'react'
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';

function Detail() {
    // Todo에서 상세보기를 누르면 그거에 객체를 보내준다 
    const { state } = useLocation();
    console.log(state)
    // navigate훅을 이용해서 돌아가기 구현 
    const navigate = useNavigate();
    return (
        <div>Detail</div>
    )
}

export default Detail
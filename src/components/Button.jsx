import styled, { css } from "styled-components";

export default function defailtButton(props) {
    //{...props}는 props 가져와 css작업 {props.children} 안에 글자 표시
    return <DefailtButton {...props}>{props.children}</DefailtButton>;
}



const DefailtButton = styled.button`
  width: 3rem;
  height: 2rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  background: #eee;
  ${(props) =>
        props.sideBtn &&
        css`   
        border-radius: 100%;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;

    `};
    &:hover {
    cursor: pointer;
    transition: 0.2s ease;
  }
  &:active {
    filter: brightness(50%);
  }

`;

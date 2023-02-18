import styled, { css } from "styled-components";

export default function defailtButton(props) {
    return <DefailtButton >{props.children}</DefailtButton>;
}



const DefailtButton = styled.button`
  width: 3rem;
  height: 2rem;
  border-radius: 2rem;
  border: none;
  outline: none;
  background: #eee;
  ${(props) =>
        props.sideBtn &&
        css`
      width: 6.25rem;
      height: 2.5rem;
    `};
    & {
    cursor: pointer;
    transition: 0.2s ease;
  }
  &:active {
    filter: brightness(50%);
  }

`;

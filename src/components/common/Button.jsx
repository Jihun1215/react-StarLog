import styled, { css } from "styled-components";

export default function Btn(props) {
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
  cursor: pointer;

  ${(props) =>
    props.sideBtn &&
    css`   
        border-radius: 100%;
        width: 3.5rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-family: 800;

    `};
    
    ${(props) =>
    props.addbtn &&
    css`
      
     width: 9.375rem;
     height: 2.5rem;
     
     background-color: #6a75ca;
     color: white;
     text-align: center;
     border-radius: .625rem;
    `};

    ${(props) =>
    props.backbtn &&
    css`
      
     width: 9.375rem;
     height: 2.5rem;
     
     background-color: #ee8683;
     color: white;
     text-align: center;
     border-radius: .625rem;
    `};

     ${(props) =>
    props.formBtn &&
    css`
      
      width: 17.715rem;
      background: #eee;
    
      `
  };
  ${(props) =>
    props.gobackhome &&
    css`
    margin: 0 auto;
    width : 18.75rem;
    height: 3.125rem;                  
  `};
    ${(props) =>
    props.addimgbtn &&
    css`
    width: 9.375rem;
    padding: .625rem .9375rem;
    border-radius: .4375rem;
    margin: 0 0 1.25rem 0;
    background: #326fe9;
  `};
    ${(props) =>
    props.deleteimgbtn &&
    css` 
    width: 9.375rem;
    padding: .625rem .9375rem;
    border-radius: .4375rem;
    margin: 0 0 1.25rem 0;
    background: #ee8683;
  `};
  ${(props) =>
    props.detailformbtn &&
    css`
    width: 9.375rem;
    padding: .625rem .9375rem;
    border-radius: .4375rem;
    margin: 0 auto;
    background: #ee8683;
  `};
  ${(props) =>
    props.modalInBtn &&
    css`
    margin: 0 auto;
    width : 12.5rem;
    height: 2.5rem;
    background: #;
  `};



  



    &:hover {
    cursor: pointer;
    transition: 0.2s ease;
  }
  &:active {
    filter: brightness(50%);
  }

`;

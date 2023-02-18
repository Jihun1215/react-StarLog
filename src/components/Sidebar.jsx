import React, { useState } from 'react'
import styled from 'styled-components'
import Btn from './Button';
// 아이콘 불러오기 
import { BiHeart } from "react-icons/bi";
import { BiPlus } from "react-icons/bi"
import Form from './Form';







function Sidebar() {
    // 모달창 display 속성 none / block
    const [open, setOpen] = useState('none');
    const [open2, setOpen2] = useState('none');

    const OpenModal = (e) => (e.target.name === 'first' ? setOpen('block') : setOpen2('block'));

    const closeModal = (e) => (e.target.name === 'first' ? setOpen('none') : setOpen2('none'));




    return (
        <SideBar>
            <Btn
                name={'first'}
                onClick={OpenModal}
                sideBtn>

                <BiPlus
                    onClick={OpenModal}
                    style={{
                        fontSize: "1.25rem"
                    }} />

            </Btn>

            {/* 모달 부분 */}
            <Modaloutside isOpen={open}>
                <ModalInside isOpen={open}>
                    <h3>starLog 포스팅하기</h3>

                    <Form />


                    <Btn
                        modalInBtn
                        onClick={closeModal}
                        name={'first'}>
                        close
                    </Btn>


                </ModalInside>
            </Modaloutside>

        </SideBar>
    )
}

export default Sidebar


const SideBar = styled.div`
    position: fixed;
    left: 8rem;
    top: 20rem;
    background: white;
    width: 75px;
    height: 150px;
    background: #F8CBA6;
    border-radius: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap :0.9rem;
    z-index: 10;
`;




// 밖부분
const Modaloutside = styled.div`
    display: ${(props) => props.isOpen};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
`;

const ModalInside = styled.div`

     display: ${(props) => props.isOpen};
    
     z-index: 10;
     // 중앙배치
     // absolute : 상위요소 비례해서..
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     border-radius: 20px;
     background-color: ${(props) => props.color};
     width: 31.25rem;
     height: 40.625rem;
     background-color: #e0e3fd;

    /* display: ${(props) => props.isOpen};  
    position: absolute;
    top: 5%;
    width: 31.25rem;
    height: 40.625rem;
    background-color: #e0e3fd;
    border-radius: 10px;
    text-align: center;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5); */
    > h3 {
        margin: 20px 0 7px 0;
        font-size: 25px;
       
    };
    
 
`;

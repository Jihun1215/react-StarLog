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


    const onClicktest = () => {
        alert('작업중..')
    }



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

            <Btn
                onClick={onClicktest}
                sideBtn>테스트</Btn>
            {/* 모달 부분 */}
            <Modaloutside isOpen={open}>
                <ModalInside isOpen={open}>
                    <h3>starLog 포스팅하기</h3>

                    <Form />


                    <div style={{
                        margin: "1.5625rem 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Btn
                            modalInBtn
                            onClick={closeModal}
                            name={'first'}>
                            close
                        </Btn>

                    </div>

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
    width: 4.6875rem;
    height: 10.9375rem;
    background: #222831;
    border-radius: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap :1.25rem;
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
     background-color: #495057;
     color: #fff;
    
     > h3 {
        text-align: center;
        font-weight: 600;
        margin: 20px 0 7px 0;
        font-size: 1.5625rem;
        text-shadow: 2px 2px 3px rgba(119, 68, 68, 0.2);
       
       
    };
    
 
`;

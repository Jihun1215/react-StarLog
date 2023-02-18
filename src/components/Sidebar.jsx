import React, {  useState } from 'react'
import styled from 'styled-components'
import DefailtButton from './Button';
// 아이콘 불러오기 
import { BiHeart } from "react-icons/bi";
import { BiPlus } from "react-icons/bi"
import Form from './Form';







function Sidebar() {

    const [modal, setModal] = useState('none');
    const [modal2, setModal2] = useState('none');


    const OpenModal = (e) => (
        e.target.name === 'one' ? setModal('block') : setModal2('block')
    );

    // close버튼 클릭시
    const closeModal = (e) => (
        e.target.name === 'close' ? setModal('none') : setModal2('none')
    );




    return (
        <SideBar>
            <DefailtButton
                name='one'
                onClick={OpenModal}
                sideBtn>

                <BiPlus style={{
                    width: "1.4rem",
                    height: "1.5rem"
                }} />

            </DefailtButton>

            {/* 모달 부분 */}
            <Modaloutside modal={modal}>
                <ModalInside modal={modal}>
                    <h3>starLog 포스팅하기</h3>
                    <Form />

                    {/* <div className='img_box'></div>
                    <form onSubmit={onSubmitImgFile}>
                        <input
                            type='file'
                            onChange={onLoadFile} />
                        <button>등록</button>
                    </form>
                    <h2> posts 등록하기</h2> */}
                    <DefailtButton modalInBtn
                        onClick={closeModal} name='close'>
                        close
                    </DefailtButton>


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
/*  */
    /* display: ${(props) => props.modal};  */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
`;
const ModalInside = styled.div`
    /* display: ${(props) => props.modal}; */
    position: absolute;
    top: 5%;
    width: 31.25rem;
    height: 37.5rem;
    background-color: #e0e3fd;
    border-radius: 10px;
    text-align: center;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    > h3 {
        margin: 40px 0 7px 0;
        font-size: 25px;
       
    };
    
 
`;





// width: 31.25rem;
// height: 37.5rem;
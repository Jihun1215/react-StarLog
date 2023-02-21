import React, { useState } from 'react'
import styled from 'styled-components'
import Btn from '../common/Button';
// 아이콘 불러오기 
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai"
import { AiFillEdit } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { __deletePosts, __getPosts, __patchPosts } from '../../redux/modules/PostsSlice';








function Sidebar(ThisData) {

    // console.log(ThisData.ThisData.id)
    // 모달창 display 속성 none / block
    const [open, setOpen] = useState('none');
    const OpenModal = (e) => (e.target.name === 'first' ? setOpen('block') : null);
    const closeModal = (e) => (e.target.name === 'first' ? setOpen('none') : null);
    const dispatch = useDispatch();



    // const [posts, setPosts] = useState(null);

    // Deatil에서 수정을 위한 State들 
    // 현재있는디테일페이지에 id값을 받아와서 적용
    // 변경할 내용들을 담을 state 들

    const [tagetTitle, setTagetTitle] = useState('');
    const [tagetBody, setTagetBody] = useState('');
    const ChangeInputObj = {
        title: tagetTitle,
        body: tagetBody,
        id: ThisData.ThisData.id,
    }
    // console.log(ChangeInputObj)

    const navigate = useNavigate()


    // 삭제 
    const onDeleteButtonClickHandler = async (id) => {
        const isTrue = window.confirm('삭제하시겠습니까 ?');
        if (isTrue === true) {
            dispatch(__deletePosts(id));
            navigate('/');
        }
    }

    const onSubmitUpdatePosts = async (e) => {
        e.preventDefault();
        dispatch(__patchPosts(ChangeInputObj));
        setOpen('none');
        setTagetTitle('');
        setTagetBody('');

    }


    return (
        <SideBar>
            <Btn
                name={'first'}
                onClick={OpenModal}
                sideBtn>

                <AiFillEdit
                    onClick={OpenModal}
                    style={{
                        fontSize: "1.25rem"
                    }} />

            </Btn>

            <Btn
                onClick={(() => {
                    onDeleteButtonClickHandler(ThisData.ThisData.id)
                })}
                sideBtn><AiFillDelete style={{ fontSize: "1.25rem" }} /></Btn>

            {/* 모달 부분 */}
            <Modaloutside isOpen={open}>
                <ModalInside isOpen={open}>
                    <h3>Posts 수정하기</h3>

                    <ModalInputBox onSubmit={onSubmitUpdatePosts}>
                        <div>
                            <ModalInputName>제목수정</ModalInputName>
                            <ModalFormInput
                                type="text"
                                value={tagetTitle}
                                onChange={((e) => {
                                    setTagetTitle(e.target.value)
                                })}
                                required
                                placeholder="수정할제목넣어" />
                        </div>

                        <div>
                            <ModalInputName>내용수정</ModalInputName>
                            <ModalFormInput
                                type="text"
                                value={tagetBody}
                                onChange={((e) => {
                                    setTagetBody(e.target.value)
                                })}
                                required
                                placeholder="수정할내용넣어" />
                        </div>
                        <main style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Btn
                                type="submit"
                                detailformbtn
                            // onClick={onUpdateButtonClickHandler}
                            >수정하기</Btn>
                        </main>
                    </ModalInputBox>


                    <div style={{
                        margin: "1.5625rem 0", display: "flex", alignItems: "center", justifyContent: "center"
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
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     border-radius: 20px;
     background-color: ${(props) => props.color};
     width: 31.25rem;
     height: 31.25rem;
     background: #495057;
     > h3 {
        color: #fff;
        text-align: center;
        font-weight: 600;
        margin: 1.25rem 0 .4375rem 0;
        font-size: 1.5625rem;
        text-shadow: .125rem .125rem .1875rem rgba(119, 68, 68, 0.2);
       
    };
    
 
`;

const ModalInputBox = styled.form`
    margin: 2.5rem auto;
    width: 25rem;
    height: 20.3125rem;
    border: 1px solid black;
    padding: .625rem;

    > div {
        margin: .625rem auto;
        width: 21.875rem;
        height: 7.5rem;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        padding: .9375rem
    };  
`;

const ModalFormBtnBox = styled.div`
`;

const ModalInputName = styled.label`
    color: #fff;
    padding: .625rem;
`;
const ModalFormInput = styled.input`
    width: 15.625rem;
    height: 2.1875rem;
    border: none;
    border-radius: 1.875rem;
    padding-left: 1.25rem;
`

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Btn from './common/Button';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
// 아이콘 불러오기 
import { BiPlus } from "react-icons/bi"
import api from '../axios/api'
import { __getPosts } from '../redux/modules/PostsSlice';
import { __postPosts } from '../redux/modules/PostsSlice';


function Sidebar() {
    // 모달창 display 속성 none / block
    const [open, setOpen] = useState('none');
    const OpenModal = (e) => (e.target.name === 'first' ? setOpen('block') : alert("Error"));
    const closeModal = (e) => (e.target.name === 'first' ? setOpen('none') : alert("Error"));
    // 이미지 state 
    const [imageFile, setImageFile] = useState({
        imageFile: "",
        viewUrl: "",
    });

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState('');

    const onClicktest = () => {
        alert('작업중..')
    }

    const dispatch = useDispatch()





    // axios로 저장하기 위해 만든 객체 
    const total = {
        title: title,
        body: body,
        user: user,
        viewUrl: imageFile.viewUrl,
    }

    const navigate = useNavigate()
    const gotoHomepage = () => {
        navigate('/')
    }


    const onChangeTitleHandler = (e) => {
        setTitle(e.target.value)
    }
    const onChangeBodyHandler = (e) => {
        setBody(e.target.value)
    }
    const onChangeUserHandler = (e) => {
        setUser(e.target.value)
    }





    // 여기서 올라가면은 홈으로 이동하고 리-렌더릴이 일어나야만 한다
    const onSumitFormHandler = async (e) => {
        e.preventDefault()
        await dispatch(__postPosts(total))
        dispatch(__getPosts())


        setImageFile('');
        setTitle('');
        setBody('');
        setUser('');

        setOpen('none')

    }

    // 조회함수가 렌더링이 되면 리-렌더링이됨 
    // useEffect(() => {
    //     fetchPosts();
    // }, []);

    const [loaded, setLoaded] = useState(false);

    let imageRef;

    const onChangeUploadHandler = (e) => {
        // console.log("사진 업로드 버튼 클릭");
        e.preventDefault();

        const fileReader = new FileReader();
        if (e.target.files[0]) {
            setLoaded(true);
            fileReader.readAsDataURL(e.target.files[0]);
        }
        fileReader.onload = () => {
            setImageFile({
                viewUrl: fileReader.result
            });
            // console.log(fileReader.result)
            setLoaded(true);
        };
        // console.log(loaded);
    };



    const onClickDeleteHandler = () => {
        // console.log("사진 삭제 버튼 클릭");
        setImageFile({
            viewUrl: ""
        });
    };




    return (
        <SideBar>
            {/* 사이드바 버튼들  */}
            <Btn
                name={'first'}
                onClick={OpenModal}
                sideBtn>
                +
            </Btn>

            <Btn
                onClick={onClicktest}
                sideBtn>.</Btn>
            {/* 모달 부분 */}
            <Modaloutside isOpen={open}>
                <ModalInside isOpen={open}>
                    {/* Form  */}

                    <SImageUploaderWrapper onSubmit={onSumitFormHandler}>

                        <h3>Posting</h3>


                        {/* 이미지 */}
                        <SImageWrapper>
                            {
                                // 이미지가 있으면 이걸 보여주고 아니면 
                                imageFile.imageFile !== "" ?
                                    (
                                        <SImageArea src={imageFile.viewUrl} />
                                    )
                                    :
                                    (
                                        <SLoading>Loading...</SLoading>
                                    )
                            }
                            <SCustomInput
                                type="file"
                                // accept='image/*' 속성을 넣어서 image 확장자만 선택적으로 업로드하도록 해주었다.
                                accept="image/*"
                                ref={(refer) => (imageRef = refer)}
                                onChange={onChangeUploadHandler}
                                required
                            />
                        </SImageWrapper>



                        <SCustomButtonWrapper>
                            <Btn
                                addimgbtn
                                onClick={() => imageRef.click()}
                            >
                                사진 업로드
                            </Btn>
                            <Btn
                                deleteimgbtn
                                onClick={onClickDeleteHandler}
                            >
                                사진 삭제
                            </Btn>
                        </SCustomButtonWrapper>



                        <InputBoxArea>
                            <label>title</label>

                            <input
                                type="text"
                                value={title}
                                onChange={onChangeTitleHandler}
                                max={10}
                                required />

                            <br /><br />

                            <label>body</label>

                            <input
                                type="text"
                                value={body}
                                onChange={onChangeBodyHandler}
                                required />
                            <br /><br />

                            <label>user</label>
                            <input
                                type="text"
                                value={user}
                                onChange={onChangeUserHandler}
                                required />

                            <br /><br />
                            {/* <Btn formBtn> 게시물 작성 .. !</Btn> */}


                            <div style={{
                                margin: "1.5625rem 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.875rem"
                            }}>
                                <Btn
                                    type="submit"
                                    addbtn> 게시물 작성 .. !</Btn>

                                <Btn
                                    backbtn
                                    type="button"
                                    onClick={closeModal}
                                    name={'first'}>
                                    close
                                </Btn>

                            </div>



                        </InputBoxArea>


                    </SImageUploaderWrapper >





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

const SImageUploaderWrapper = styled.form`
    width: 100%;
    height: 100%;
    padding: .625rem;
    margin: 0 auto;
    > h3 {
        text-align: center;
        font-weight: 600;
        margin: 20px 0 7px 0;
        font-size: 1.5625rem;
        text-shadow: 2px 2px 3px rgba(119, 68, 68, 0.2);
       
    }

`;


const SCustomButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .625rem 0;
    gap: 20px;
   
`;



const SCustomInput = styled.input`
    display: none;
    margin: 0 auto;
`;
// 사진 감싸는 div 
const SImageWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
`;

// 이미지 표시하기 
const SImageArea = styled.img`
     width: 100%;
    height: 12.5rem;
   text-align: center;
    
`;

const SLoading = styled.div`
      width: 100%;
    height: 12.5rem;
    background : #868E96;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.2rem;
    margin: 0 auto;
`;

const InputBoxArea = styled.div`
    text-align: center;

    >label {
       padding: 0 1rem;
       font-size: 1.25rem;

    }

    > input {
       width: 15.625rem;
       height: 2.5rem;
       border-radius: 1.875rem;
       padding-left: 1.25rem;
    };
`;


const ModalInBtn2 = styled.input`
      width: 9.375rem;
     height: 2.5rem;
     background-color: #ee8683;
     color: white;
     text-align: center;
     border-radius: .625rem;
     border: none;
      outline: none;
    background: #eee;
     cursor: pointer;

`
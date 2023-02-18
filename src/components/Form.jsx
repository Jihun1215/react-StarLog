import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../axios/api"
import Btn from "./Button";




export default function ImageUploader() {
    // Form 최종값 
    const [posts, setPosts] = useState(null)
    // img useState 
    const [imageFile, setImageFile] = useState({
        imageFile: "",
        viewUrl: "",
    });
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const all = {
        title,
        body,
        imageFile: imageFile.viewUrl
    }

    const navigate = useNavigate()


    // 조회 함수
    const fetchTodos = async () => {
        // const { data } = await axios.get("http://localhost:4001/todos");
        const { data } = await api.get('/posts')
        setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
    };
    const onChangeBodyHandler = (e) => {
        setBody(e.target.value)
    }

    // 추가 함수 
    const onSubmitHandler = async () => {
        api.post('/posts', all)
        // 리-렌더링을 위해 조회함수 불러옴 
        fetchTodos();

    }


    const onSumitFormHandler = (e) => {
        e.preventDefault()
        onSubmitHandler()
        setImageFile('');
        setTitle('');
        setBody('');
        navigate('/')

    }
    // 조회함수가 렌더링이 되면 리-렌더링이됨 
    useEffect(() => {
        fetchTodos();
    }, []);





    // console.log(imageFile.viewUrl)

    // console.log(imageFile.imageFile)
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
            console.log(fileReader.result)
            setLoaded(true);
        };
        console.log(loaded);
    };



    const onClickDeleteHandler = () => {
        // console.log("사진 삭제 버튼 클릭");
        setImageFile({
            viewUrl: ""
        });
    };

    return (
        <SImageUploaderWrapper onSubmit={onSumitFormHandler}>

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
                <SCustomButton
                    btnValue={"primary"}
                    onClick={() => imageRef.click()}
                >
                    사진 업로드
                </SCustomButton>
                <SCustomButton
                    btnValue={"danger"}
                    onClick={onClickDeleteHandler}
                >
                    사진 삭제
                </SCustomButton>
            </SCustomButtonWrapper>



            <InputBoxArea>
                <label>title</label>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    required />

                <br /><br />

                <label>body</label>

                <input
                    type="text"
                    value={body}
                    onChange={onChangeBodyHandler}
                    required />

                <br /><br />
                <Btn formBtn> 게시물 작성 .. !</Btn>


            </InputBoxArea>


        </SImageUploaderWrapper >

    );
}


const SImageUploaderWrapper = styled.form`
    padding: 7% 15%;
    border: 1px solid red;

`;

const SCustomButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .625rem 0;
    gap: 20px;
`;

const SCustomButton = styled.div`
    text-align: center;
    width: 150px;
    padding: 10px 15px;
    border-radius: 7px;
    cursor: pointer;
    margin: 0 0 20px 0;
    box-sizing: border-box;
    background-color: ${({ btnValue }) =>
        btnValue === "primary" ? "rgb(50, 111, 233)" : "rgb(238, 134, 131)"};
    color: #fff;
`;

const SCustomInput = styled.input`
    display: none;
`;

const SImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

// 이미지 표시하기 
const SImageArea = styled.img`
    width: 21.875rem;
    height: 12.5rem;
    
`;

const SLoading = styled.div`
     width: 21.875rem;
    height: 12.5rem;
    background : #eee;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const InputBoxArea = styled.div`
    border: 1px solid red;

    > input {
        width: 100%;
        height: 30%;
    }
`;

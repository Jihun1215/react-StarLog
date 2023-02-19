import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Btn from '../Button';
// 아이콘 불러오기 
import { useNavigate } from 'react-router-dom';
import { BiHeart } from "react-icons/bi";
import { BiPlus } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import api from '../../axios/api'








function Sidebar() {
    // 모달창 display 속성 none / block
    const [open, setOpen] = useState('none');
    const [open2, setOpen2] = useState('none');

    const OpenModal = (e) => (e.target.name === 'first' ? setOpen('block') : setOpen2('block'));

    const closeModal = (e) => (e.target.name === 'first' ? setOpen('none') : setOpen2('none'));


    // const onClicktest = () => {
    //     alert('작업중..')
    // }
    const [posts, setPosts] = useState(null);


    const navigate = useNavigate()
    // 조회 함수
    const fetchPosts = async () => {
        // const { data } = await axios.get("http://localhost:4001/todos");
        const { data } = await api.get('/posts')
        console.log(data)
        setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
    };
    console.log(posts)

    useEffect(() => {
        fetchPosts();
    }, []);

    // 삭제 함수 
    // 삭제를 해야 하니 인자 값으로 어떤걸 삭제 해야 되는지를 알려줘야 한다 
    const onDeleteButtonClickHandler = async (id) => {
        // axios.delete(`http://localhost:4001/todos/${id}`);
        api.delete(`/posts/${id}`)
        // 삭제되고 렌더링을 시키려면 어떻게 접근 해야 할까 ? 
        setPosts(posts.filter((item) => {
            return item.id !== id
        }))
        navigate('/')
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
                onClick={(() => {
                    onDeleteButtonClickHandler(posts[0].id)
                })}
                sideBtn><AiFillDelete style={{ fontSize: "1.25rem" }} /></Btn>



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
     background-color: #e0e3fd;
     > h3 {
        text-align: center;
        font-weight: 600;
        margin: 20px 0 7px 0;
        font-size: 1.5625rem;
        text-shadow: 2px 2px 3px rgba(119, 68, 68, 0.2);
       
    };
    
 
`;

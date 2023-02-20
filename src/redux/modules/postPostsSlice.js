import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../axios/api'

// 초기값 설정하기 
const initialState = {
    postslist: [],
    isLoading: false,
    isError: false,
    error: null,
}


// 미들웨어
export const __postPosts = createAsyncThunk('createposts', async (payload, thunkAPI) => {
    try {
        api.post('/post', {});
        // 데이터를 넣고 리렌더링을 위해 조회함수 넣어여함
        const response = await api.get('/posts');
        console.log('response', response.data)
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        // 실패할떄 
        return thunkAPI.rejectWithValue(error);
    }
})



export const postPostsSlice = createSlice({
    name: 'createposts',
    initialState,
    reducers: {}, // 미들웨어
    extraReducers: {
        // 강의버전
        // 실행중
        [__postPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        // 성공
        [__postPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            // 서버로부터 받아온 값을 넣어준다 response.data가 action.payload 들어와서
            // state.todos로 넣어준다 
            state.postslist = action.payload;
        },
        // 실패 
        [__postPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
    }

});




// 액션함수 넣기
export const { } = postPostsSlice.actions;
// redux
export default postPostsSlice.reducer;
// export const { addNumber, minusNumber } = counterSlice.actions
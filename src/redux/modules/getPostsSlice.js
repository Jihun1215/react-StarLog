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
export const __getPosts = createAsyncThunk('get/Posts', async (payload, thunkAPI) => {
    try {
        // payload에 해당하는 posts 찾기
        const response = await api.get('/posts');
        console.log('response', response.data)
        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        // 실패할떄 
        return thunkAPI.rejectWithValue(error);
    }
})



export const getPostsSlice = createSlice({
    name: 'postslist',
    initialState,
    reducers: {}, // 미들웨어
    extraReducers: {
        // 강의버전
        // 실행중
        [__getPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = false;
        },
        // 성공
        [__getPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            // 서버로부터 받아온 값을 넣어준다 response.data가 action.payload 들어와서
            // state.todos로 넣어준다 
            state.postslist = action.payload;
        },
        // 실패 
        [__getPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        },
    }

});
// // 준비전
// builder.addCase(__getPosts.pending, (state, atcion) => {
//     state.isLoading = true;
//     state.isError = false;
// });
// builder.addCase(__getPosts.fulfilled, (state, action) => {
//     state.isLoading = false;
//     state.isError = false;
//     state.postslist = action.payload;
// });
// // 실패 
// builder.addCase(__getPosts.rejected, (state, action) => {
//     state.isLoading = false;
//     state.isError = true;
//     state.error = action.payload;
//         // });
//     }
// });



// 액션함수 넣기
export const { } = getPostsSlice.actions;
// redux
export default getPostsSlice.reducer;
// export const { addNumber, minusNumber } = counterSlice.actions
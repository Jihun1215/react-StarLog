import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import api from '../../axios/api'

// 초기값 설정하기 
const initialState = [
    {
        postslist: [],
        isLoading: false,
        isError: false,
        error: null,
    },

]
// 미들웨어
export const __getPosts = createAsyncThunk('getPostsList', async (payload, thunkAPI) => {
    try {
        // payload에 해당하는 posts 찾기
        const response = await api.get('/posts');
        return thunkAPI.fulfillWithValue(response.data);
        console.log(response)
    } catch (error) {
        // 실패할떄 
        return thunkAPI.rejectWithValue(error);
    }
})



export const starlogSlice = createSlice({
    name: 'postslist',
    initialState,
    reducers: {}, // 미들웨어
    extraReducers: (builder) => {
        // 준비전
        builder.addCase(__getPosts.pending, (state, atcion) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(__getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.postslist = action.payload;
        });
        // 실패 
        builder.addCase(__getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        });
    },
});



// 액션함수 넣기
export const { } = starlogSlice.actions;
// redux
export default starlogSlice.reducer;
// export const { addNumber, minusNumber } = counterSlice.actions
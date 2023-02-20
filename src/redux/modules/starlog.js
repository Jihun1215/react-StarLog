import { createSlice } from "@reduxjs/toolkit";

// 초기값 설정하기 
const initialState = [
    {
        id: 0,
        title: '아 집에가고싶다',
        body: '안녕하시렵니까',
        viewUrl: '',
    },

]


const starlogSlice = createSlice({
    name: 'starlog',
    initialState,
    reducers: {

    }

})

export default starlogSlice.reducer;
// export const { addNumber, minusNumber } = counterSlice.actions
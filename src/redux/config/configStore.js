import { configureStore } from "@reduxjs/toolkit";
import Posts from '../modules/PostsSlice'




const store = configureStore({
    reducer: { Posts }
});

export default store
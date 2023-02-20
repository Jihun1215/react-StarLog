import { configureStore } from "@reduxjs/toolkit";
import postslist from '../modules/getPostsSlice'
import createPost from '../modules/createPostsSlice'



const store = configureStore({
    reducer: {
        postslist,
        createPost
    },
});

export default store
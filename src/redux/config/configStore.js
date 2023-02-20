import { configureStore } from "@reduxjs/toolkit";
import postslist from '../modules/getPostsSlice'



const store = configureStore({
    reducer: {
        postslist,
    },
});

export default store
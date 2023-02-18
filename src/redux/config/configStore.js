import { configureStore } from "@reduxjs/toolkit";
import starlog from "../modules/starlog";



const store = configureStore({
    reducer: {
        starlog
    },
});

export default store
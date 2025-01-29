import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../slices/userSlice";
import FeedReducer from "../slices/feedSlice";
import ToastReducer from "../slices/toastSlice";

const store = configureStore({
    reducer:{
        user : UserReducer,
        feed : FeedReducer,
        toast: ToastReducer,
    },
}); 

export default store;
import { configureStore } from "@reduxjs/toolkit";
import { removeUser, adduser }  from "../slices/userSlice";
import UserReducer from "../slices/userSlice";

const store = configureStore({
    reducer:{
        user : UserReducer
    },
}); 

export default store;
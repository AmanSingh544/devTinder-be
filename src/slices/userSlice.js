import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        adduser: (state, action) => {
            return action.payload; // whatever value returned will be set to state
        },
        removeUser: (state, action) =>{
            return null;
        }
    }
});


export default userSlice.reducer;  // exporting reducer
export const { adduser, removeUser } = userSlice.actions;  // Exporting actions. ex- addUser and removeUser are not used in this file, so we are exporting empty object
import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../DemoData"


export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUsers: (state, action) => {
            state.value.push(action.payload);
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
    },
});


export const { addUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
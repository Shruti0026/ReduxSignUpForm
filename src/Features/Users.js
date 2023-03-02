import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
//import { UsersData } from "../DemoData"

const userAdapter = createEntityAdapter();
export const userSelector = userAdapter.getSelectors(
    (state) => state.user
);
console.log(userSelector);

export const userSlice = createSlice({
    name: "user",
    initialState: userAdapter.getInitialState(),
    reducers: {
        addUsers: (state, action) => {
            userAdapter.addOne(state, action.payload);
            // state.value.push(action.payload);
        },

        deleteUser: (state, action) => {
            userAdapter.removeOne(state, action.payload);
            // state.value = state.value.filter((user) => user.id !== action.payload.id);
        },

    },
});


export const { addUsers, deleteUser } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: undefined,
    user: undefined,
};

const authSlice = createSlice({
    name: " auth",
    initialState,
    reducers: {
        userSignedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userSignedOut: (state, action) => {
            state.accessToken = undefined;
            state.user = undefined;
        },
    },
});

export const { userSignedIn, userSignedOut } = authSlice.actions;
export default authSlice.reducer;

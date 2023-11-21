import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // accessToken: undefined,
    // user: undefined,
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
    },
};

const authSlice = createSlice({
    name: " auth",
    initialState,
    reducers: {
        /* userSignedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        }, */
        /* userSignedOut: (state, action) => {
            state.accessToken = undefined;
            state.user = undefined;
        }, */

        /* new implementation */
        signIn: (state, action) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "uid-1",
                    isModerator: false,
                },
            };
        },
        signOut: () => {
            return initialState;
        },
        toggleModerator: (state) => {
            state.value.isModerator = !state.value.isModerator;
        },
    },
});

export const { signIn, signOut, toggleModerator } = authSlice.actions;
export default authSlice.reducer;

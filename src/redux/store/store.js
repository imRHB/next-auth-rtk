import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";

export default configureStore({
    reducer: {
        authReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

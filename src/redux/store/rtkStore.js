import { configureStore } from "@reduxjs/toolkit";

import { rtkApiSlice } from "../features/rtkApi/rtkApiSlice";
import rtkUserSlice from "../features/user/rtkUserSlice";

export default configureStore({
    reducer: {
        [rtkApiSlice.reducerPath]: rtkApiSlice.reducer,
        rtkUsers: rtkUserSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rtkApiSlice.middleware),
});

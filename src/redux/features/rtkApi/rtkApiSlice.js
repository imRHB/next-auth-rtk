import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
        prepareHeaders: async (headers, { getState, endpoint }) => {},
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});

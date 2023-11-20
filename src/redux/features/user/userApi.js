import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: "/users",
                method: "GET",
            }),
        }),
        getUser: builder.query({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetUserQuery, useGetUsersQuery } = userApi;

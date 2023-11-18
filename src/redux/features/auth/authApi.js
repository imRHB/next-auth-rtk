import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: "/signup",
                method: "POST",
                body: data,
            }),
        }),
        signin: builder.mutation({
            query: (data) => ({
                url: "/signin",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useSigninMutation, useSignupMutation } = authApi;

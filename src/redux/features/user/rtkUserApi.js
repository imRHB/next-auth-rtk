import { rtkApiSlice } from "../rtkApi/rtkApiSlice";

export const rtkUserApi = rtkApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: "/users",
                method: "GET",
            }),
        }),
    }),
});

export const { useGetUsersQuery } = rtkUserApi;

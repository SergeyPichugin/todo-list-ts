import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { IUser } from "../models/models";

export const usersApi = createApi({
    reducerPath: 'users/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints: build => ({
        getUsers: build.query<IUser[], string>({
            query: () => ({
                url: `users`,
            })
        })
    })
})

export const { useGetUsersQuery } = usersApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITodo } from "../models/models";
export const todosApi = createApi({
    reducerPath: 'todos/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints: build => ({
        getTodos: build.query<ITodo[], string>({
            query: () => ({
                url: `todos`,
            })
        })
    })
})

export const { useGetTodosQuery } = todosApi
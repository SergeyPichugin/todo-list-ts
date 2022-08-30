import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from "./todosApi";
import { usersApi } from "./users.api";

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    }
})
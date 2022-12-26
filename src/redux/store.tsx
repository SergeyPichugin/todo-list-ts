import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from "./todosApi";
import { usersApi } from "./users.api";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware).concat(usersApi.middleware),
})

setupListeners(store.dispatch)
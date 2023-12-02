import {configureStore} from "@reduxjs/toolkit"         
import { postSlice } from "../features/Post/PostSlice"
import { TodoSlice } from "../features/Todo/TodoSlice"
import { userSlice } from "../features/User/UserSlice"

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        todo: TodoSlice.reducer,
        post: postSlice.reducer,
    },
})
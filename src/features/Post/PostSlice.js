import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// API https://jsonplaceholder.typicode.com/posts

const initialState = {
    posts: [],
}

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/')
    dispatch(setPosts(res.data))
})

export const deletePostById = createAsyncThunk(
    'posts/deletePostById',
    async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePost(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload
        },
        deletePost: (state,action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.pending]: () => console.log("GetPosts pending: Отравка"), // Отравка "Send"
        [getPosts.fulfilled]: () => console.log("GetPosts Fulfiled: Успешно Получилос"), // Если Успешно Получилось "Success"
        [getPosts.rejected]: () => console.log("GetPosts rejected: Проблема 'Error'"), // Если были Проблема "Error"
        // Delete
        [deletePostById.pending]: () => console.log("Delete pending: Отравка"),
        [deletePostById.fulfilled]: () => console.log("Delete Fulfiled: Успешно Получилос"),
        [deletePostById.rejected]: () => console.log("Delete rejected: Проблема 'Error'"),
    }
})

export const { setPosts, deletePost } = postSlice.actions
export default postSlice.reducer
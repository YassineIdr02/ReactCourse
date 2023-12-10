import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postSlice'
import  useReducer  from '../features/users/usersSlice'


export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: useReducer
    }
})
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (state,action)=>{
    try {
        const response = await axios.get(USERS_URL)
        return response.data
    } catch (error) {
        console.log('Error: ',error.message)
    }
})

const initialState = []

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action)=>{
            return action.payload // we're overriding the initial state of users
        })
    }

})

export default usersSlice.reducer
export const selectAllUsers = (state) => state.users

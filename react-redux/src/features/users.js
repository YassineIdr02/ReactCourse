import { createSlice } from "@reduxjs/toolkit"; 

const initialStateValue = {name:"",age:0,email:""}
export const userSlice = createSlice({
    name: "user",
    initialState:{
        value: initialStateValue
    },
    reducers : {
        login : (state, payload) => {
            state.value = payload.payload  
        },
        logout : (state) => {
            state.value = initialStateValue  
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer

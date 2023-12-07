import {createSlice} from "@reduxjs/toolkit"
const initialValue = ""

const themeSlice = createSlice({
    name: "theme",
    initialState:{
            value: initialValue
    },
    reducers: {
        changeTheme: (state, action)=>{
            state.value = action.payload
        }
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios';



const initialValueState = []
export const usersSlice = createSlice({
    
    
    name: 'users',
    initialState:{
        value: initialValueState
    },
    reducers: {
       
    }
})

export const addUserAsync = (payload) => async (dispatch) => {
    try {
      const res = await axios.post('http://localhost:8000/users', payload);
      dispatch(); // Update the state with the added user
      // You might dispatch additional actions based on the API response if needed
      console.log("testax")
    } catch (error) {
      // Handle error if the API call fails
      console.error('Error adding user:', error);
    }
  };
  

export const {addUser} = usersSlice.actions
export default usersSlice.reducer
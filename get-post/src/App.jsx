import { useState } from 'react'
import AddUser from './components/AddUser'
import {useDispatch} from 'react-redux'

function App() {
  
  return (
    <div className='flex justify-center my-auto'>
      <AddUser></AddUser>
    </div>
  )
}

export default App

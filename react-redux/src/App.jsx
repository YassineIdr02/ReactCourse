import { useState } from 'react'
import './App.css'
import Profile from './components/profile'
import Login from './components/login'
import ChangeColor from './components/changeColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile/>
      <Login/>
      <ChangeColor/>
    </>
  )
}

export default App

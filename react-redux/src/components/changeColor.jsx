import { useState } from "react"
import {useDispatch} from "react-redux" 
import { changeTheme } from "../features/theme"

export default function changeColor() {
    const [color, setColor] = useState("")
    const dispatch = useDispatch() 
  return (
    <>
        <input type="text" onChange={(event) => setColor(event.target.value)} />

        <button onClick={()=>dispatch(changeTheme(color))}>Change</button>
    </>
  )
}

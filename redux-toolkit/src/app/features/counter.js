import {useDispatch, useSelector} from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  reset
} from '../features/counterSlice'

import {useState} from 'react'


function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  const [incrementAmount, setAmount] = useState(0)
  const addNumber = Number(incrementAmount) || 0
  const resetAll = () => {
    setAmount(0)
    dispatch(reset())

  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={()=> dispatch(increment()) }>+</button>
      <button onClick={()=> dispatch(decrement()) }>-</button>

      <input type="number" onChange={(e)=>setAmount(e.target.value)} value={incrementAmount}/>
      <button onClick={()=>dispatch(incrementByAmount(addNumber))} >Add amount</button>
      <button onClick={()=> resetAll()}>Reset</button>

    </div>  
  )
}

export default Counter
import React, { useState } from 'react'

function FunctionCounter() {
    const [number, setNumber] = useState(0)

    const decreaseOnclickFunction=()=>{
        setNumber(number-1)
    }
  return (
    <div>
      <h1>Function Counter App</h1>
      <h1>Number: {number}</h1>
      <button onClick={()=>{setNumber(number+1)}}>+</button>
      <button onClick={decreaseOnclickFunction}>-</button>
    </div>
  )
}

export default FunctionCounter

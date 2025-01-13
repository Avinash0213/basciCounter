import React, { useState } from 'react'

const App = () => {
  const [val,setVal]=useState(0);
  return (
    <div>
      <h1>Count: {val}</h1>
      <button onClick={()=>setVal(val+1)}>Increment</button>
      <button onClick={()=>setVal(val-1)}>Decrement</button>
      
    </div>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {
  const[text,setText]=useState("")
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
      <p>num of carecter:{text.length}</p>
    </div>
  )
}

export default App
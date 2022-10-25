import React, { useEffect, useState } from 'react'

function Hello() {
    const [state,setState] = useState(0)
    const [value,setValue]=useState('')

    useEffect(()=>{
      console.log(useEffect);
        document.title=`You Clicked ${state}times`
    },[state])

  return (
    <div>
        <input onChange={(e)=>{
            setValue(e.target.value)
        }}></input>
      <button onClick={()=>
        setState(state+1)
      }>Clicked{state}</button>
    </div>
  )
}

export default Hello

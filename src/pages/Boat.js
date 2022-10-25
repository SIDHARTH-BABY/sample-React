import React, { useEffect, useState } from 'react'

function Boat() {
    const [value,setValue] = useState(0)

    const change= ()=>{
         setValue(value+1)
    }
    useEffect(()=>{
        const interval = setInterval(change,1000)
        return()=>{
       clearInterval(interval)
        }
    })  
  return (
    <div>
   <h1>{value}</h1>
      
    </div>
  )
}

export default Boat

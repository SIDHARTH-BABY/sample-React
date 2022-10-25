import React, { useEffect, useState } from 'react'

function Direction() {
    const [x,setX] = useState(0)
    const[y,setY]= useState(0)


    const onMouseMove = e =>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove', onMouseMove)
    })
  return (
    <div>
      <h1>x:{x}</h1>
      <h1>:{y}</h1>
    </div>
  )
}

export default Direction

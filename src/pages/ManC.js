import React, { useContext } from 'react'
import { createContext } from '../App'


function ManC() {
    const user = useContext(createContext)
    return (
        <div>
         {user}
        </div>
    )
}   

export default ManC
 
import React, { useEffect,useState } from 'react'

import axios from 'axios'

function FetchDta() {
    const [value,setValue] = useState([])
     
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response.data);
            setValue(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
        

    },[])
  return (
    <div>
     <ul>
        {
            value.map(hai=>
                <li key={hai.id}>{hai.title} </li>

            )
        }
     </ul>
    </div>
  )
}

export default FetchDta

import React, { useEffect, useState } from 'react'

function ReducSam() {
    const [value, setValue] = useState(0)

    const change = () => {
        setValue(value + 1)
    }
    useEffect(() => {
        const hello = setInterval(change,1000)
        return () => {
            clearInterval(hello)
        }
    })
    return (
        <div>
            {value}
        </div>
    )
}

export default ReducSam

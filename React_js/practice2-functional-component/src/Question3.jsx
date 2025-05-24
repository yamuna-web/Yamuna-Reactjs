import React, { useState } from "react"
const Question3 = () => {
    const [count, setcount] = useState(0)

    const handleclick = () => {
        setcount(count => count + 1)
    }
    return (
        <div>
           <h1>{count}</h1>
            <button onClick={handleclick}>click</button>
        </div>
    )
}
export default Question3
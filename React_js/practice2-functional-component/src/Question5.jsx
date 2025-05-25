import { useEffect, useState } from "react"

const Question5 = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {

        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return <div>
        <h1>current time</h1>
        <h1>{time}</h1>
    </div>
}
export default Question5
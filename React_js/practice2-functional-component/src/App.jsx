import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Question1/> */}
   {/* <Question2/> */}
   {/* <Question3/> */}
   <Question4/>
    </>
  )
}

export default App

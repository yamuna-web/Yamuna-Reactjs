import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Par1 from './Par1'
import Parent1 from './Component/Parent1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Par1/>
     {/* <Parent1/> */}
    </>
  )
}

export default App
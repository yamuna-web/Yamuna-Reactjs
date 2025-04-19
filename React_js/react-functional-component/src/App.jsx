import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './users'
import Yamuna from './yamuna'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Users/>
     {/* <Yamuna/> */}
    </>
  )
}

export default App

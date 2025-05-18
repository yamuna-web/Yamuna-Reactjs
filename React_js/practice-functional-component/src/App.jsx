import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './Basic Functional/User'
import Yamuna from './Component_with_props/Yamuna'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <User/> */}
<Yamuna/>
    </>
  )
}

export default App

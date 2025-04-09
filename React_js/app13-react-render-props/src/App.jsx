import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maincd from './Maincd'
import Mousepos from './Toggleren/Mousepos'
import Rendr from './Toggleren/Render'
import Render from './Toggleren/Render'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 {/* <Maincd/> */}
 <Mousepos/>
 {/* <Render/> */}
    </>
  )
}

export default App

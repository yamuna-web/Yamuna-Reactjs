import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickComponent from './Component/ClickComponent'
import HoverComponent from './Component/HoverComponent'
import Click from './components/Click'
import Hovercom from './components/Hovercom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ClickComponent/>
      <HoverComponent/>
      {/* <Click/> */}
      {/* <Hovercom/> */}
    </>
  )
}

export default App

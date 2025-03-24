import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickComponent from './Component/ClickComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ClickComponent/>
      
    </>
  )
}

export default App

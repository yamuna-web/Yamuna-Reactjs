import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommonCounter from './Render_props/CommonCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CommonCounter/>
    </>
  )
}

export default App

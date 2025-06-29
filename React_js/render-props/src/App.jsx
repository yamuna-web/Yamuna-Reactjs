import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parnt'
import Chenchaiah from './Chenchaiah'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Parent/> */}
      <Chenchaiah/>
    </>
  )
}

export default App

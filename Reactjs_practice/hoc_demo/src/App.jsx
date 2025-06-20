import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Click from './Click'
import Hover from './Hover'
import Clickcounter from './Components/Clickcounter'
import Hovercounter from './Components/Hovercounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Click/>
   <br />
   <Hover/> */}
   <Clickcounter/>
   <br />
   <Hovercounter/>
    </>
  )
}

export default App

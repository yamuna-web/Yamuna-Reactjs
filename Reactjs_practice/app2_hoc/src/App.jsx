import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './Component/ClickCounter'
import HoverCounter from './Component/HoverCounter'
import Neeraja from './counter/Neeraja'
import Yamuna from './counter/Yamuna'
import Click from './Hoc/Click'
import Hover from './Hoc/Hover'
import Clickbhavi from './Bhavya/Clickbhavi'
import Hoverbhavi from './Bhavya/Hoverbhavi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <ClickCounter/> */}
  {/* <br /> */}
  {/* <HoverCounter/> */}
  {/* <Neeraja/>
  <br />
  <Yamuna/> */}
  {/* <Click/>
  <br />
  <Hover/> */}
  <Clickbhavi/>
  <br />
  <Hoverbhavi/>
    </>
    
  )
}

export default App

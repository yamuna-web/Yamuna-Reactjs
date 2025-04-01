import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickComponent from './Component/ClickComponent'

import Clickcom from './MainComponent/Clickcom'
import Hovercompo from './MainComponent/Hovercompo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <ClickComponent/>
      <HoverComponent/> */}
      {/* <Click/> */}
      {/* <Hovercom/> */}
      <Clickcom/>
      <Hovercompo/>
    </>
  )
}

export default App

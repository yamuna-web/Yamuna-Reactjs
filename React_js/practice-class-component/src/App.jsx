import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yamuna from './Class_component_creation/Yamuna'
import Counter from './Count/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  {/* <Yamuna/> */}
<Counter/>
   </>
  )
}

export default App

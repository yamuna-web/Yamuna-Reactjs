import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yamuna from './Class_component_creation/Yamuna'
import Counter from './Count/Counter'
import Parent from './Components_with_props/Parent'

import UserCard from './Usercard'
import Timer from './Timer'
import Loginstatus from './Loginstatus'
import Toggle from './Toggle'
import Inputfield from './Inputfield'
import Maxdistance from './Maxdistance'
import Greeting from './Component_with_default_props/Greeting'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  {/* <Yamuna/> */}
{/* <Counter/> */}
{/* <Parent/> */}
<Greeting/>
{/* <UserCard/> */}
{/* <Timer/> */}
{/* <Loginstatus/> */}
{/* <Parent/> */}
{/* <Toggle/> */}
{/* <Inputfield/> */}
{/* <Loginstatus/> */}
{/* <Maxdistance/> */}
   </>
  )
}

export default App

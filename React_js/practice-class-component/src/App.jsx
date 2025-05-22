import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Yamuna from './Class_component_creation/Yamuna'
import Counter from './Count/Counter'
import UserCard from './Usercard'
import Timer from './Timer'
import Loginstatus from './Loginstatus'
import Toggle from './Toggle'
import Inputfield from './Inputfield'
import Maxdistance from './Maxdistance'
import Greeting from './Component_with_default_props/Greeting'
import Parent1 from './Components_with_props/Parent1'
import Greeting1 from './Component_with_default_props/Greetprops1'
import Parent from './Parent'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  {/* <Yamuna/> */}
{/* <Counter/> */}
{/* <Greeting/> */}
{/* <UserCard/> */}
{/* <Timer/> */}
{/* <Loginstatus/> */}
{/* <Parent/> */}
{/* <Toggle/> */}
<Inputfield/>
{/* <Loginstatus/> */}
{/* <Maxdistance/> */}
{/* <Parent1/> */}
{/* <Greeting1/> */}
   </>
  )
}

export default App

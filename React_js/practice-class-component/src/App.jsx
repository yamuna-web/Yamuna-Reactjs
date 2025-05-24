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
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Question4 from './Question4'
import Question5 from './Question5'
import Question6 from './Question6'
import Question7 from './Question7'
import Practice1 from './Practice1'
import Practice2 from './Practice2'
import Practice3 from './Practice3'
import Practice4 from './Practice4'
import Practice5 from './Practice5'



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
{/* <Inputfield/> */}
{/* <Loginstatus/> */}
{/* <Maxdistance/> */}
{/* <Parent1/> */}
{/* <Greeting1/> */}
{/* <Question1/> */}
{/* <Question2/> */}
{/* <Question3/> */}
{/* <Question4/> */}
{/* <Question5/> */}
{/* <Question6/> */}
{/* <Question7/> */}
<Practice1/>
{/* <Practice2/> */}
{/* <Practice3/> */}
{/* <Practice4/> */}
{/* <Practice5/> */}
   </>
  )
}

export default App

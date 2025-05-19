import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './Basic Functional/User'
import Yamuna from './Component_with_props/Yamuna'
import Form from './Forms/Form'
import ColourChange from './Handling_event_color_change/ColourChange'
import Image from './Img_Url/Image'
import Todolist from './List_to_do_list/Todolist'
import ShowHide from './Rendring_show_Hide/ShowHide'
import ClickCounter from './Use_state_Hook/Clickcounter'
import Clock from './Useeffect_clock/Clock'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <User/> */}
<Yamuna/>
{/* <Form/> */}
{/* <ColourChange/> */}
{/* <Image/> */}
{/* <Todolist/> */}
{/* <ShowHide/> */}
{/* <ClickCounter/> */}
{/* <Clock/> */}
    </>
  )
}

export default App

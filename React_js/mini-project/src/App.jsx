import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Managementtickets from './E_commerce_Chart/managementtickets'
import SocilaMedia from './Social Media_Post Editor/SocialMedia'
import TaskManagement from './Task Management/TaskManagement'
import OnlineQuiz from './OnlineQuiz/OnlineQuiz'
import UsersProfile from './UserProfile/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Managementtickets/> */}
     {/* <SocilaMedia/> */}
     {/* <TaskManagement/> */}
     {/* <OnlineQuiz/> */}
     <UsersProfile/>
    </>
  )
}

export default App

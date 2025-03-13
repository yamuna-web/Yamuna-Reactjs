import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Managementtickets from './E_commerce_Chart/managementtickets'
import SocilaMedia from './Social Media_Post Editor/SocialMedia'
import TaskManagement from './Task Management/TaskManagement'
import OnlineQuiz from './OnlineQuiz/OnlineQuiz'
import UsersProfile from './UserProfile/UserProfile'
import Managementsystem from './Managementsystem/Managementsystem.jsx'
import DigitalAdress from './DigitalAddress/DigitalAddress.jsx'
import MovieTicket from './MovieTicket/MovieTicket'
import InventaryManagement from './InventaryManagement/InventaryManagement.jsx'
import ExpenseTracker from './ExpenseTracker/ExpenseTracker.jsx'
import UserProfile from './UserProfile/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Managementtickets/> */}
     <SocilaMedia/>    
     {/* <TaskManagement/> */}
     {/* <OnlineQuiz/>  */}
     {/* <UserProfile/>  */}
     {/* <Managementsystem/> */}
     {/* <DigitalAdress/> */}
     {/* <MovieTicket/> */}
     {/* <InventaryManagement/> */}
     {/* <ExpenseTracker/> */}
    </>
  )
}

export default App

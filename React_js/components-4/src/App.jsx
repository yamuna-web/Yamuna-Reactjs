import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContainer from './UserContainer'
import SimpleComponent from './SimpleComponent'
import CounterComponent from './CounterComponent'
import RenderPropsExample from './RenderPropsExample'
import TabsExample from './TabsExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <UserContainer/> */}
    {/* <SimpleComponent/> */}
    {/* <CounterComponent/> */}
    {/* <RenderPropsExample/> */}
    <TabsExample/>
    </>
  )
}

export default App

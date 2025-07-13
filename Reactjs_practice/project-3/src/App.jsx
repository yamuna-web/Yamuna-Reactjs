import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoApp from './TodoApp'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import TemperatureConverter from './TemperatureConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <TodoApp/> */}
  {/* <TodoForm/> */}
  {/* <TodoItem/> */}
  
  <TemperatureConverter/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersDetails from './Components/UsersDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<UsersDetails/>
  </>
  )
}

export default App

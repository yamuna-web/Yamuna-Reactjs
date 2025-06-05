import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormInput from './FormInput'
import UseRefFocus from './UseRefFocus'
import UseRefValue from './UseRefValue'
import UseReducerExample from './UseReducerExample'
import UseMemoExample from './UseMemoExample'
import UseCallbackExample from './UseCallbackExample'
import MemoComponent from './MemoComponent'
import LazyLoadComponent from './LazyLoadComponent'
import DebounceInput from './DebounceInput'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <FormInput/> */}
  {/* <UseRefFocus/> */}
  {/* <UseRefValue/> */}
  {/* <UseReducerExample/> */}
  {/* <UseMemoExample/> */}
  {/* <UseCallbackExample/> */}
  {/* <MemoComponent/> */}
  {/* <LazyLoadComponent/> */}
  <DebounceInput/>
 
  
 
    </>
  )
}

export default App

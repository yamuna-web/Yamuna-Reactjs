import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchOnMount from './FetchOnMount'
import LoadingErrorHandling from './LoadingErrorHandling'
import PollingAPI from './PollingAPI'
import CancelableFetch from './CancelableFetch'
import AxiosInterceptors from './AxiosInterceptors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FetchOnMount/> */}
      {/* <LoadingErrorHandling/> */}
      {/* <PollingAPI/> */}
      {/* <CancelableFetch/> */}
      <AxiosInterceptors/>
    
     
    </>
  )
}

export default App

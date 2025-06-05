import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicClassComponent from './BasicClassComponent'
import DefaultPropsComponent from './DefaultPropsComponent'
import MultiplePropsComponent from './MultiplePropsComponent'
import SinglePropComponent from './SinglePropComponent'
import PropsInJSXComponent from './PropsInJSXComponent'
import StateExample from './StateExample'
import StateUpdateButton from './StateUpdateButton'
import StateVsProps from './StateVsProps'
import MultipleStates from './MultipleStates'
import ComponentDidMount from './ComponentDidMount'
import ComponentDidUpdate from './ComponentDidUpdate'
import ComponentWillUnmount from './ComponentWillUnmount'
import BasicFunctionalComponent from './BasicFunctionalComponent'
import FunctionalPropsComponent from './FunctionalPropsComponent'
import UseStateHook from './UseStateHook'
import UpdateStateFunctional from './UpdateStateFunctional'
import UseEffectMount from './UseEffectMount'
import UseEffectUpdate from './UseEffectUpdate'
import UseEffectUnmount from './UseEffectUnmount'
import ParentComponent from './ParentComponent'
import ChildToParent from './ChildToParent'
import SiblingParent from './SiblingParent'
import IfElseRender from './IfElseRender'
import DisplayList from './DisplayList'
import Forminputstate from './Forminputstate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BasicClassComponent/>
     {/* <DefaultPropsComponent/> */}
     {/* <MultiplePropsComponent/> */}
     {/* <SinglePropComponent/> */}
    {/* <PropsInJSXComponent/> */}
    {/* <StateExample/> */}
    {/* <StateUpdateButton/> */}
    {/* <StateVsProps/> */}
    {/* <MultipleStates/> */}
    {/* <ComponentDidMount/> */}
    {/* <ComponentDidUpdate/> */}
    {/* <ComponentWillUnmount/> */}
    {/* <BasicFunctionalComponent/> */}
    {/* <FunctionalPropsComponent/> */}
    {/* <UseStateHook/> */}
    {/* <UpdateStateFunctional/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <UseEffectUnmount/> */}
    {/* <ParentComponent/> */}
    {/* <ChildToParent/> */}
    {/* <SiblingParent/> */}
    {/* <IfElseRender/> */}
    {/* <DisplayList/> */}
    {/* <Forminputstate/> */}
    </>
  )
}

export default App

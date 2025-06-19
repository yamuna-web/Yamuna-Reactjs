import { Component } from "react";
import Hoc from "./Hoc";

class HoverCounter extends Component{
render(){
const{count,increment,decrement,reset}=this.props
    return <div>
        <h2>count:{count}</h2>
    <button onMouseOver={increment}>increment</button>
    <button onMouseOver={decrement}>decrement</button>
    <button onMouseOver ={reset}>reset</button>
    </div>
}
}
export default Hoc(HoverCounter)
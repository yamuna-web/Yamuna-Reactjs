import { Component } from "react";
import Hoc from "./Hoc";

class Clickcounter extends Component{
render(){
    const{count,increment,decrement,reset}=this.props
    return <div>
       <h2>count{count}</h2>
       <button onClick={increment}>increment</button>
       <button onClick={decrement}>decrement</button>
       <button onClick={reset}>reset</button>
    </div>
}
}
export default Hoc(Clickcounter)
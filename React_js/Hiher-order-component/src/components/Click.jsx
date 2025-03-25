import React, { Component } from "react";
import Hocds from "./Hocds";

 class Click extends Component{
    render(){
        return <>
         <h2>count:{this.props.count}</h2>
         <button onClick={this.props.increment}>increment</button>
         <button onClick={this.props.decrement}>decrement</button>
         <button onClick={this.props.reset}>reset</button>
        </>
    }
}
export default Hocds(Click)
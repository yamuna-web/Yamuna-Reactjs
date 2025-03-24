import React, { Component } from "react";
import Hocd from "./Hocd";

 class ClickComponent extends Component{
    render(){
        
        return (
            <>
            <h2>count:{this.props.count}</h2>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
            <button onClick={this.props.reset}>reset</button>
            </>
        )
    }
}
export default Hocd(ClickComponent)
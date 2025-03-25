import React, { Component } from "react";
import Hovercom from "./Hovercom"

 class Hovercom extends Component{
    render(){
        return <>
         <h2>count:{this.props.count}</h2>
         <button onMouseOver={this.props.increment}>increment</button>
         <button onMouseOver={this.props.decrement}>decrement</button>
         <button onMouseOver={this.props.reset}>reset</button>
        </>
    }
}
export default Hocds(Hovercom)
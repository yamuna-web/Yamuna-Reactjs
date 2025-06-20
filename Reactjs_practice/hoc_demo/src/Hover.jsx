import { Component } from "react";

export default class Hover extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
    render(){
        return <div>
            <h2>count:{this.state.count}</h2>
            <button onMouseOver={this.increment}>increment</button>
            <button onMouseOver={this.decrement}>decrement</button>
            <button onMouseOver={this.reset}>reset</button>
        </div>
    }
}
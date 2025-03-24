import { Component } from "react";

export default class Yamuna extends Component{
    render(){
        return <div>
            <h2>{this.props.count}</h2>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
            <button onClick={this.props.reset}>Reset</button>
        </div>
    }
}
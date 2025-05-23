import { Component } from "react";

export default class Question2 extends Component{
    constructor(){
        super()
        this.state={
            count:1
        }
    }
increment=()=>{
    this.setState({count:this.state.count+1})
}
    render(){
        return <div>
             {this.state.count}
             <button onClick={this.increment}>increment</button>
        </div>
    }
}
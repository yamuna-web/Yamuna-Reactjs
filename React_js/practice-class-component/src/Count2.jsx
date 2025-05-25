import { Component } from "react";

export default class Count2 extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incremet=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return <div>
             <h1>{this.state.count}</h1>
             <button onClick={this.incremet}>incremet</button>
        </div>
    }
}
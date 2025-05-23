import { Component } from "react";

export default class Practice4 extends Component{
    constructor(){
        super()
        this.state={
            seconds:0,
            intervalied:null
        }
    }
    componentDidMount=()=>{
this.state.intervalied=setInterval(()=>{
    this.setState({
        seconds:this.state.seconds+1
    })
},1000)
    }
    componentWillUnmount=()=>{
      clearInterval(this.state.clearInterval)
    }
    render(){
        return <div>
            <h1>{this.state.seconds}</h1>
        </div>
    }
}
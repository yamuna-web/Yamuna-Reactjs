import { Component } from "react";

export default class Question6 extends Component{
    constructor(){
        super()
        this.state={
            ison:true
        }
    }
    handletoggle=()=>{
        this.setState({
            ison:!this.state.ison
        })
    }
    render(){
        return <div>
            <h1>{this.state.ison?"on":"off"}</h1>
            <button onClick={this.handletoggle}>handletoggle</button>
        </div>
    }
}

import { Component } from "react";
import Greetprops from "./Greetprops";

export default class Greeting extends Component{
    constructor(){
        super()
        this.state={
            name:"yamuna",
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(<>
        <h1>{this.state.name}</h1>
        <Greetprops all={this.state}/>

        </>)
    }
}
import { Component } from "react";
import Greeting2 from "./Greeting2";

export default class Greeting2par extends Component{
    constructor(){
        super()
        this.state={
            name:"yamuna"
        }
    }
    render(){
        return <div>
         <Greeting2 name={this.state.name}/>
        </div>
    }
}
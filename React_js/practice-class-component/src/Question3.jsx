import { Component } from "react";
import Question3a from "./Qustion3a";

export default class Question3 extends Component{
    constructor(){
        super()
        this.state={
            person:{
                name:"neeraja"
            }
        }
    }
    render(){
        return <div>
         <Question3a all={this.state.person.name}/>
        </div>
    }
}

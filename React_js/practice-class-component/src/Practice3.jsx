import { Component } from "react";
import Practice3a from "./Practice3a";

export default class Practice3 extends Component{
    constructor(props){
        super(props)
        this.state={
            person:{
                name:"pspk"
            }
        }
    }
    render(){
        return <div>
           <Practice3a all={this.state.person.name}/>
        </div>
    }
}
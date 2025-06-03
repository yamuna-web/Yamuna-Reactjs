import { Component } from "react";
import ChildButton from "./ChildButton";

class Parent extends Component{
    constructor(){
        super()
        this.state={
            message : "Welcome to Parent Component !!"
        }
    }

    changeMessage=()=>{
        this.setState({message :"Message Changed by Child"})

    }
    render(){
        return <div>
            <ChildButton parentMessage = {this.state.message} changeMessage={this.changeMessage}/>
        </div>
    }
}
export default Parent;
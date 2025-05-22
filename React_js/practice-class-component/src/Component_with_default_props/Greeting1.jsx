import { Component } from "react";
import Greeting1 from "./Greetprops1";

export default class Greetprops1 extends Component{
    constructor(props){
        super(props)
        this.state={
            count:1
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(<>
        {this.state.name}
        <Greeting1 all={this.state.count }/>
    
       
        </>)
    }
}
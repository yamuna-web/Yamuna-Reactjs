import { Component } from "react";
import Greetprops from "./Greetprops";


 class Greeting extends Component{
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
        return(<>
        <h1>{this.state.name}</h1>
        <Greetprops all={this.state}/>

        </>)
    }
}
export default Greeting

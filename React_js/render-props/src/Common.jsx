import { Component } from "react";
export default class Commmon extends Component{
    constructor(){
        super()
        this.state={
            count:18
        }
    };
    increment=()=>{
        this.setState({count:this.state.count+4})
    }
    decrement=()=>{
        this.setState({count:this.state.count-4})
    }
    reset=()=>{ 
        this.setState({count:18})
    }
    
    render(){
        return <div>
         {this.props.render(this.state.count,this.increment,this.decrement,this.reset)} 
        </div>
    }
}

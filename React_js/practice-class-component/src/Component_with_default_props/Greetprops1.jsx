import { Component } from "react";

export default class Greeting1 extends Component{
    render(){
       return(<>
     <h2>{this.props.count}</h2>
     <button onClick={this.props.increment}>button</button>
       </>)
    }
}
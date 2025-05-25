import { Component } from "react";

export default class Usercard3 extends Component{
    constructor(){
        super()
    }
    render(){
      return  <p>role:{this.props.role}</p>
    }

    
}
Usercard3.defaultProps={
role:"yamuna"
}
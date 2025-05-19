import { Component } from "react";

export default class Greetprops extends Component{  
  
    render(){
        return(<>
        <p>hi {this.props.all.name}</p>       
        </>)
    }
}
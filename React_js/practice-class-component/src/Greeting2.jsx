import { Component } from "react";

export default class Greeting2 extends Component{
    render(){
        return <div>
            {this.props.name}
        </div>
    }
}
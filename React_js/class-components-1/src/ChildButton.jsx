import { Component } from "react";

class ChildButton extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <button onClick={this.props.changeMessage}>Change Message</button>
            <h3>{this.props.parentMessage}</h3>
        </div>
    }
}

export default ChildButton
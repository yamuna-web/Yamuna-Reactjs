import { Component } from "react";

class Childbutton extends Component {
    render() {
        return <div>
            <button onClick={this.props.changeMessage}>message</button>
            <h3>{this.props.parentMessage}</h3>
        </div>
    }
}

export default Childbutton
import { Component } from "react";
import Childbutton from "./Childbutton";

class Parent extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome to Parent Component !!"
        }
    }
    changeMessage = () => {
        this.setState({ message: "Welcome to Child component " })

    }
    render() {
        return <div>
            <Childbutton parentMessage={this.state.message} changeMessage={this.changeMessage} />
        </div>
    }
}
export default Parent;
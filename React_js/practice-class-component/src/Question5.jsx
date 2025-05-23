import { Component } from "react";

export default class Question5 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>
            <h1>name:{this.props.name}</h1>
            <h1>role:{this.props.role}</h1>
        </div>
    }
}
Question5.defaultProps = {
    role: "yamuna"
}
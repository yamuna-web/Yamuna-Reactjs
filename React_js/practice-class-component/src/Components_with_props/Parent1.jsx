import { Component } from "react";
import Child1 from "./Child1";

export default class Parent1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "neeraja"
        }
    }
    render() {
        return (<>
            <h2>patrnt1 component</h2>
            {this.state.name}
            <Child1 name={this.state.name} />

        </>)
    }
}
import { Component } from "react"

export default class Child1 extends Component{
render(){
    return <div>
        <h2>Child1 component</h2>
        {this.props.name}
    </div>
}
}
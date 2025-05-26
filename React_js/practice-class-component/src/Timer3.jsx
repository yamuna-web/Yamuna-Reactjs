import { Component } from "react";

export default class Timer3 extends Component {
    constructor() {
        super()
        this.state = {
            seconds: 0
        }
    }
componentDidMount=()=>{
    this.state.intervel
}

    render() {
       return <p>{this.state.seconds}</p>
    }
}
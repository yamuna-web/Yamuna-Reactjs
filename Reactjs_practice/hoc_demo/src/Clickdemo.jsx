import { Component } from "react"

export class Clickdemo extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    reset = () => {
        this.setState({ count: 0 })
    }
    render() {
        return <div>
            <h2>count:{this.state.count}</h2>
            <button onClick={this.increment}>increment</button>
            <button onClick={this.decrement}>decrement</button>
            <button onClick={this.reset}>reset</button>

        </div>
    }
}
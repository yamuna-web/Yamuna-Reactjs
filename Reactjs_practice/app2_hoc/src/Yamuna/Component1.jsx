import { Component } from "react";

export default class Component1 extends Component {
    constructor() {
        super();
        this.state = {
            fname: "yamuna"
        };
    }

    changename = () => {
        this.setState({
            fname: this.state.fname == "yamuna" ? "neeraja" : "yamuna"
        });
    };

    render() {
        return (
            <div>
                <h2>{this.state.fname}</h2>
                <button onClick={this.changename}>Change</button>
            </div>
        );
    }
}

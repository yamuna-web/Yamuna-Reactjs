import { Component } from "react";
import Child from "./Child"; 

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Yamuna",
    };
  }

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <h3>{this.state.name}</h3>
        <Child name={this.state.name} />
      </div>
    );
  }
}

export default Parent;

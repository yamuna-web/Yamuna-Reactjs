import React, { Component } from 'react';

class StateExample extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return <p>Count: {this.state.count}</p>;
  }
}

export default StateExample;

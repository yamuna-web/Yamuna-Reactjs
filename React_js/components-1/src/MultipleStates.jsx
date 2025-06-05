import React, { Component } from 'react';

class MultipleStates extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Yamuna',
      age: 22,
    };
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}

export default MultipleStates;

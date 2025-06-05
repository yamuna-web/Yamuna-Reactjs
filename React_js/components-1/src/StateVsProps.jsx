import React, { Component } from 'react';

class StateVsProps extends Component {
  constructor() {
    super();
    this.state = { status: 'Active' };
  }

  render() {
    return (
      <div>
        <p>Prop from parent: {this.props.title}</p>
        <p>Component state: {this.state.status}</p>
      </div>
    );
  }
}

export default StateVsProps;

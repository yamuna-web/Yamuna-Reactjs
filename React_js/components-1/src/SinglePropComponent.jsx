import React, { Component } from 'react';

class SinglePropComponent extends Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

export default SinglePropComponent;

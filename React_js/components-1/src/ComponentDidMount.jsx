import React, { Component } from 'react';

class ComponentDidMount extends Component {
  componentDidMount() {
    console.log('Component mounted!');
  }

  render() {
    return <p>Check console after component mounts.</p>;
  }
}

export default ComponentDidMount;

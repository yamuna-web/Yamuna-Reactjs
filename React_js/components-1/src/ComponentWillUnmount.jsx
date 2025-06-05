import React, { Component } from 'react';

class ComponentWillUnmount extends Component {
  componentWillUnmount() {
    console.log('Component is about to be removed!');
  }

  render() {
    return <p>I will unmount soon.</p>;
  }
}

export default ComponentWillUnmount;

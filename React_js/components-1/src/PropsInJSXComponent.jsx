import React, { Component } from 'react';

class PropsInJSXComponent extends Component {
  render() {
    return <h3>Welcome, {this.props.user}!</h3>;
  }
}

export default PropsInJSXComponent;

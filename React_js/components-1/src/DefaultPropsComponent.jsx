import React, { Component } from 'react';

class DefaultPropsComponent extends Component {
  render() {
    return <p>City: {this.props.city}</p>;
  }
}

DefaultPropsComponent.defaultProps = {
  city: 'Unknown City',
};

export default DefaultPropsComponent;

import React, { Component } from 'react';

class ComponentDidUpdate extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component updated!');
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ComponentDidUpdate;

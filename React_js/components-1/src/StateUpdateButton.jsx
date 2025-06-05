import React, { Component } from 'react';

class StateUpdateButton extends Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <p>Clicks: {this.state.clicks}</p>
      </div>
    );
  }
}

export default StateUpdateButton;

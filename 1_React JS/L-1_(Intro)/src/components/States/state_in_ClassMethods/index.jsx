import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  color = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter (Class Component)</h1>
        <p>Current Count: {this.state.count}</p>
        <button style={this.color} onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount: Starting timer');
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        secondsElapsed: prevState.secondsElapsed + 1
      }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only update if secondsElapsed is even (just an example)
    const shouldUpdate = nextState.secondsElapsed % 2 === 0;
    console.log(`shouldComponentUpdate: ${shouldUpdate}`);
    return shouldUpdate;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate: secondsElapsed changed from ${prevState.secondsElapsed} to ${this.state.secondsElapsed}`);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Clearing timer');
    clearInterval(this.interval);
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>
            THis is Life Cycle Method Component
        </h1>
        <h2>Timer: {this.state.secondsElapsed} seconds</h2>
      </div>
    );
  }
}

export default Timer;

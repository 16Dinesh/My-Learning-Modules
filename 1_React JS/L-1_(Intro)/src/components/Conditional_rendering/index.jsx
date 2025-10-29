import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  color = {
    backgroundColor: "green",  
  }

  toggleLogin = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <h1>Conditional Rendering Example</h1>

        {isLoggedIn ? (
          <h2>Welcome back, User!</h2>
        ) : (
          <h2>Please sign in.</h2>
        )}

        <button style={this.color} onClick={this.toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    );
  }
}

export default UserGreeting;

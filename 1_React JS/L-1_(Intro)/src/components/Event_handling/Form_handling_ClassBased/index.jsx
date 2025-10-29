import React, { Component } from 'react';

class FormHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submittedData: null,
    };
  }

  // Update state for controlled inputs
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Handle form submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;

    // For demo, just store submitted data in state
    this.setState({
      submittedData: { name, email, message },
      // Clear form inputs
      name: '',
      email: '',
      message: '',
    });
  };

  render() {
    const { name, email, message, submittedData } = this.state;

    return (
      <div style={{ maxWidth: '400px', margin: '20px auto' }}>
        <h2>Contact Form (Class Component)</h2>

        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
                style={{ width: '100%', padding: '6px' }}
              />
            </label>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
                style={{ width: '100%', padding: '6px' }}
              />
            </label>
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label>
              Message:
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
                rows="4"
                required
                style={{ width: '100%', padding: '6px' }}
              />
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
            <h3>Submitted Data:</h3>
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Message:</strong> {submittedData.message}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FormHandling;

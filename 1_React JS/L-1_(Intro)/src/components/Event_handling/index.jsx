import React, { Component } from 'react';

class EventHandlingExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      isChecked: false,
      selectedOption: 'option1',
      message: '',
      mouseX: 0,
      mouseY: 0,
    };
  }

  // 1. Click Event
  handleClick = () => {
    alert('Button clicked!');
  };

  // 2. Change Event for input
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // 3. Submit Event for form
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.setState({ message: `Form submitted with input: ${this.state.inputValue}` });
  };

  // 4. Checkbox Change Event
  handleCheckboxChange = (event) => {
    this.setState({ isChecked: event.target.checked });
  };

  // 5. Select Change Event
  handleSelectChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  // 6. Mouse Move Event
  handleMouseMove = (event) => {
    this.setState({
      mouseX: event.clientX,
      mouseY: event.clientY,
    });
  };

  // 7. Keyboard Event (onKeyPress)
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      alert('Enter key pressed!');
    }
  };

  render() {
    const { inputValue, isChecked, selectedOption, message, mouseX, mouseY } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h1>React Event Handling Examples</h1>

        {/* 1. Click Event */}
        <button onClick={this.handleClick}>Click Me</button>

        <hr />

        {/* 2 & 3. Input & Form Submit */}
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Type something"
            value={inputValue}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress} 
          />
          <button type="submit">Submit</button>
        </form>

        <p>{message}</p>

        <hr />

        {/* 4. Checkbox */}
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleCheckboxChange}
          />
          Check me!
        </label>

        <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>

        <hr />

        {/* 5. Select Dropdown */}
        <label>
          Choose an option: 
          <select value={selectedOption} onChange={this.handleSelectChange}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>

        <p>Selected: {selectedOption}</p>

        <hr />

        {/* 6. Mouse Move */}
        <div
          onMouseMove={this.handleMouseMove}
          style={{
            border: '1px solid black',
            height: '150px',
            lineHeight: '150px',
            textAlign: 'center',
            userSelect: 'none',
          }}
        >
          Move your mouse here
        </div>

        <p>Mouse position: X: {mouseX}, Y: {mouseY}</p>
      </div>
    );
  }
}

export default EventHandlingExamples;

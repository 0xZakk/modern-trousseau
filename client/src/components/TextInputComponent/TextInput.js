import React from "react";
import "./TextInput.css";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <>
        <label className="label-name">{this.props.label}</label>
        <input
          className="text-input"
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </>
    );
  }
}
export default TextInput;

// value={this.state.value}
// onChange={this.handleChange}

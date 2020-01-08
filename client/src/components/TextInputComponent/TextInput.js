import React from "react";
import "./TextInput.css";

const TextInput = props => (
  <>
    <label className="label-name">{props.label}</label>
    <input
      className="text-input"
      type={props.type}
      placeholder={props.placeholder}
    />
  </>
);

export default TextInput;

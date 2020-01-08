import React from "react";
import "./TextInput.css";

const TextInput = props => (
  <>
    <label className="labelNameClass">{props.labelName}</label>
    <br />
    <input
      className="textInputClass"
      type={props.type}
      placeholder={props.placeholder}
    />
  </>
);

export default TextInput;

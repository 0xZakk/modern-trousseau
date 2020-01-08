import React from "react";
import "./TextInput.css";

const TextInput = props => (
  <>
    <label>{props.labelName}</label>
    <br />
    <input type={props.type} placeholder={props.placeholder} />
  </>
);

export default TextInput;

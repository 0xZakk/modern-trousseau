import React from "react";
import "./SelectDropdown.css";

const SelectDropdown = props => (
  <>
    <select onClick={props.onClick}>
      {props.option.map(element => (
        <option value={element}>{element}</option>
      ))}

      {/* <option value={props.option}>{props.option}</option> */}
    </select>
  </>
);

export default SelectDropdown;

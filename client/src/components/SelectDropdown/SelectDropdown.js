import React from "react";
import "./SelectDropdown.css";

const SelectDropdown = props => (
  <>
    <select className={props.className} onChange={props.onChange}>
      {props.option.map((element, index) => (
        <option key={index} value={element}>
          {element}
        </option>
      ))}
    </select>
  </>
);

export default SelectDropdown;

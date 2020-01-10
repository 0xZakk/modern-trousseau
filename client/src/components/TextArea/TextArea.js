import React from "react";
import "./TextArea.css";

const TextArea = props => (
  <div>
    <label className="text-area-label">{props.label}</label>
    <textarea className="text-area" onChange={props.onChange}>
      {props.value}
    </textarea>
  </div>
);

export default TextArea;

import React from "react";
import "./TextArea.css";

const TextArea = props => (
  <div className="text-box">
    {props.hasLabel ? (
      <div className="label">
        <label className="text-area-label">{props.label}</label>
      </div>
    ) : (
      <label></label>
    )}

    <div className="text">
      <textarea
        className="text-area"
        onChange={props.onChange}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  </div>
);

export default TextArea;

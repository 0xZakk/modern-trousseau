import React from "react";
import "./TextArea.css";

const TextArea = props => (
  <div>
    <label className={props.titleClassList}>{props.title}</label>
    <textarea className={props.textAreaClassList} onChange={props.onChange}>
      {props.innerText}
    </textarea>
  </div>
);

export default TextArea;

{
  /* <p className={props.pClassList}>Is there anything else you want us to know?</p>; */
}
// Tell us about your dream dress! Do you have any Modern Trousseau favorites?

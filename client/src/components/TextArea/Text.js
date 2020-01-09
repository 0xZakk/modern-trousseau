import React from "react";
import "./Text.css";

const Text = props => (
  <div>
    <label className={props.titleClassList}>{props.title}</label>
    <textarea className={props.textAreaClassList} onChange={props.onChange}>
      {props.innerText}
    </textarea>
  </div>
);

export default Text;

{
  /* <p className={props.pClassList}>Is there anything else you want us to know?</p>; */
}
// Tell us about your dream dress! Do you have any Modern Trousseau favorites?

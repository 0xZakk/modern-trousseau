import React from "react";
import "./Logo.css";

const Logo = props => {
  let classList = "logo-tag";

  let types = ["logo", "notag"];

  if (types.includes(props.type)) {
    classList += ` ${props.type}`;
  }

  if (props.notag) {
    classList += ` notag` // Note the spacing here since we are adding to the string!
}

  return (
    <>
      <div className="logo-tag">
        <div className="logo">
          <div className="modern">Modern</div>
          <div className="trousseau">trousseau</div>
        </div>
        <div className={classList}>designed & made with love in the usa</div>
      </div>
    </>
  );
};
export default Logo;

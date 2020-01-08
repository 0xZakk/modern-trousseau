import React from "react";
import "./FlagshipMenu.css";

const FlagshipMenu = props => (
  <div
    className={props.isVisible ? "nav-container" : "nav-container is-visible"}
  >
    <nav>
      <ul>
        <li>
            <h3 className="nav-title">Home</h3>
            <span className="dots">&#9679;</span>
        </li>
        <li>
            <h3 className="nav-title">Our Gowns</h3>
            <span className="dots">&#9679;</span>
        </li>
        <li>
            <h3 className="nav-title">Visit Us</h3>
            <span className="dots">&#9679;</span>
        </li>
        <li>
            <h3 className="nav-title">Book An Appointment</h3>
            <span className="dots">&#9679;</span>

        </li>
        <li>
            <h3 className="nav-title">About Us</h3>
        </li>
      </ul>
    </nav>
  </div>
);

export default FlagshipMenu;

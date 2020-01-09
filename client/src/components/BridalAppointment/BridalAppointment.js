import React from "react";
import "./BridalAppointment.css";
import Icons from "../Icons/FAIcon";
import Tassel from "./Tassel.svg";

let defaultView = false;
let infoView = false;
let fullInfoView = true;
let full_name = "Jenny";

function BridalAppointment(props, defaultView, infoView, fullInfoView) {
  if (defaultView === true) {
    return (
      <div className="appt-container defaultView">
        <h4>Bridal Appointment</h4>
        <div className="main-text">
          Modern Trousseau appointments are truly about you, the bride. Our
          Flagship stores offer a private appointment for you, your family and
          friends, to create your dream wedding gown. With every Modern
          Trousseau gown made in Woodbridge, Connecticut, be prepared for fun,
          bubbles, and that magic moment where you find your dream dress.
        </div>
      </div>
    );
  } else if (infoView === true) {
    return (
      <div className="appt-container infoView">
        <h4>Bridal Appointment</h4>
        <div className="icon-container">
          <ul className="info-details">
            <li>
              <Icons name={["fas", "calendar-day"]} className="icon" />
              <span className="icon-text">
                {props.date}Thursday, January 9, 2020
              </span>
            </li>
            <li>
              <Icons name={["fas", "map-marker-alt"]} className="icon" />
              <span className="icon-text">Washington, DC</span>
            </li>
            <li>
              <Icons name={["far", "clock"]} className="icon" />
              <span className="icon-text">9:00 to 10:00 AM</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className="appt-container fullInfoView">
      <div className="times-close">
        <Icons name={["fas", "times"]} />
      </div>
      <div className="thankyou-info-container">
        <div className="flex"><img src={Tassel} className="dress-icon" /></div>
        <div className="thankYou">
          <div className="flex1">
            Thank You, {full_name}
            <span>
              We’ll get back to you within 24 hours via email to confirm your
              appointment date & time. See you soon!
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

// const BridalAppt = props => (
//   <div
//     className={
//       props.isApptConfirmed ? "appt-default-m" : "appt-confirmed-mobile"
//     }
//   >
//     <h4>Bridal Appointment</h4>
//     <div className="main-text">
//       Modern Trousseau appointments are truly about you, the bride. Our Flagship
//       stores offer a private appointment for you, your family and friends, to
//       create your dream wedding gown. With every Modern Trousseau gown made in
//       Woodbridge, Connecticut, be prepared for fun, bubbles, and that magic
//       moment where you find your dream dress.
//     </div>
//   </div>
// );

export default BridalAppointment;

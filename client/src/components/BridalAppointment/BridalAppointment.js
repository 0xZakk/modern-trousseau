import React from "react";
import "./BridalAppointment.css";
import Icons from '../Icons/FAIcon'

let defaultView = false;
let infoView = true;

function BridalAppointment (props, defaultView, infoView, fullInfoView ) {
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
  }
  if (fullInfoView === true) {

  }
    return (
      <div className="appt-container infoView">
        <h4>Bridal Appointment</h4>
        <div className="icon-container">
          <ul className="info-details">
            <li><Icons name={['fas', 'calendar-day']} className="icon" /><span className="icon-text">Thursday, January 9, 2020</span></li>
            <li><Icons name={['fas', 'map-marker-alt']} className="icon" /><span className="icon-text">Washington, DC</span></li>
            <li><Icons name={['far', 'clock']} className="icon" /><span className="icon-text">9:00 to 10:00 AM</span></li>
          </ul>
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

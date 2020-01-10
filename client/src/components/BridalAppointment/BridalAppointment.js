import React from "react";
import "./BridalAppointment.css";

const InformationBanner = props => {
  return (
    <div
      className={
        props.isMobile
          ? "appt-container primary-pink "
          : "appt-container background-white"
      }
    >
      {props.children}
    </div>
  );
};

// const Banner = props => {
//   return <div className={props.isMobile ? "appt-container primary-pink " : "appt-container background-white"}>{props.children}</div>;
// };

export default InformationBanner;

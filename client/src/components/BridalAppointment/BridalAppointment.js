import React from "react";
import "./BridalAppointment.css";

const InformationBanner = props => {
  return <div className="appt-container primary-pink">{props.children}</div>;
};

export default InformationBanner;

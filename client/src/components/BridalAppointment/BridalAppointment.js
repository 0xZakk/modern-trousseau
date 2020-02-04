import React from "react";
import "./BridalAppointment.css";

const InformationBanner = props => {
  return <div className="appt-container appt-background">{props.children}</div>;
};

export default InformationBanner;

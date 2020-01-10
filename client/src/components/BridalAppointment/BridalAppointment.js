import React, { Component } from "react";
import "./BridalAppointment.css";

const InformationBanner = props => {
  return <div className="appt-container default-view">{props.children}</div>;
};

export default InformationBanner;

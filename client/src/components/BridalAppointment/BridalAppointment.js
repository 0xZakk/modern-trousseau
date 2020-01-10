import React, { Component } from "react";
import "./BridalAppointment.css";

const InformationBanner = props => {
  return <div className="appt-container primary-pink default-view">{props.children}</div>;
};

export default InformationBanner;

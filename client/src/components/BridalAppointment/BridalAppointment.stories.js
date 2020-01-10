import React from "react";
import { storiesOf } from "@storybook/react";

import InformationBanner from "./BridalAppointment";
import Icons from "../Icons/FAIcon";
import Tassel from './Tassel.svg'

storiesOf("Information Banner", module)
  .add("Bridal Appointment Default", () => (
    <InformationBanner>
      <h4>Book Appointments</h4>
      <p className="main-text">
        Modern Trousseau appointments are truly about you, the bride. Our
        Flagship stores offer private appointment for you, your family and
        friends, to create your dream wedding gown. With every Modern Trousseau
        gown made in Woodbridge, Connecticut, be prepared for fun, bubbles, and
        that magic moment where you find your dream dress.
      </p>
    </InformationBanner>
  ))
  .add("Book Appointment", () => (
    <InformationBanner>
      <div className="info-view">
        <h4 className="h4">Book Appointment</h4>
        <div className="icon-container">
          <p className="icon-details">
            <Icons name={["fas", "calendar-day"]} size="sm" />
            &nbsp;&nbsp;Thursday, November 7, 2019
          </p>
          <p className="icon-details">
            <Icons name={["fas", "map-marker-alt"]} size="sm" />
            &nbsp;&nbsp;Washington, DC
          </p>
          <p className="icon-details">
            <Icons name={["far", "clock"]} size="sm" />
            &nbsp;&nbsp;9:00-10:00am
          </p>
        </div>
      </div>
    </InformationBanner>
  ))
  .add("Bridal Appointment Info Desktop", () => (
    <InformationBanner>
      <h4 className="bridal-appt-desktop">Book Appointments</h4>
      <img src={Tassel} className="dress-icon" />
      <div className="width-max">
      <p className="main-text">
      Modern Trousseau appointments are truly about you, the bride. Our Flagship stores offer private appointment for you, your family and friends, to create your dream wedding gown. With every Modern Trousseau gown made in Woodbridge, Connecticut, be prepared for fun, bubbles, and that magic moment where you find your dream dress.
      </p><br />
      <p className="main-text">A Modern Trousseau team member will follow-up within 24 hours to confirm your appointment date and time. See you in the Flagship soon!</p>
      </div>
    </InformationBanner>
  ));

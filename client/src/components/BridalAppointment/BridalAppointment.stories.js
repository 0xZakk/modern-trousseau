import React from "react";
import { storiesOf } from "@storybook/react";

import InformationBanner from "./BridalAppointment";
import Icons from "../Icons/FAIcon";
import Tassel from "./Tassel.svg";
import Button from "../Button/Button";

storiesOf("Information Banner", module)
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
  .add("Bridal Appointment Info", () => (
    <InformationBanner>
      <h4 className="bridal-appt-h4">Book Appointments</h4>
      <img src={Tassel} className="dress-icon" />
      <p className="main-text">
        Modern Trousseau appointments are truly about you, the bride. Our
        Flagship stores offer private appointment for you, your family and
        friends, to create your dream wedding gown. With every Modern Trousseau
        gown made in Woodbridge, Connecticut, be prepared for fun, bubbles, and
        that magic moment where you find your dream dress.
      </p>
      <div className="width-max">
        <br />
        <p className="main-text">
          A Modern Trousseau team member will follow-up within 24 hours to
          confirm your appointment date and time. See you in the Flagship soon!
        </p>
      </div>
    </InformationBanner>
  ))
  .add("Bridal Appointment Confirmation Info", () => (
    <InformationBanner>
      <div className="times-close">
        <Icons name={["fas", "times"]} />
      </div>
      <div className="appt-confirmation">
        <div className="appt-confirmation-container">
        <div className="appt-img">
          <img src={Tassel} className="appt-icon" />
        </div>
        <div className="confirmation-info">
          <div className="appt-name">Thank You, Melanie!</div>
          <span className="appt-name-sub">
            We’ll get back to you within 24 hours via email to confirm your
            appointment date & time. See you soon!
          </span>
          <div className="appt-data">
            <p className="appt-details">
              <Icons name={["fas", "calendar-day"]} size="sm" />
              &nbsp;&nbsp;Thursday, November 7, 2019
            </p>
            <p className="appt-details">
              <Icons name={["fas", "map-marker-alt"]} size="sm" />
              &nbsp;&nbsp;Washington, DC
            </p>
            <p className="appt-details">
              <Icons name={["far", "clock"]} size="sm" />
              &nbsp;&nbsp;9:00-10:00am
            </p>
          </div>
          <div className="appt-btn">
            <Button label="Browse Dresses" type="red" large />
            </div>
            <div className="appt-btn-2">
            <Button label="Watch Our Video" type="red" large />
          </div>
        </div>
        </div>
        <hr className="hr-line" />
        <div className="appt-store-info">
          <div className="appt-store-title">STORE CONTACT INFO</div>
          <div className="appt-store-text">Modern Trousseau Washington DC 1523 Wisconsin Ave NW Washington, DC 20007 (202) 803-0065 dc@moderntrousseau.com @ ModernTrousseauDC</div>

        </div>
      </div>
    </InformationBanner>
  ));

import React from "react";
import { storiesOf } from "@storybook/react";

import InformationBanner from "./BridalAppointment";
import Icons from "../Icons/FAIcon";

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
      <h2>Book Appointment</h2>
      <p>
        <Icons name={["fas", "calendar-day"]} size="xs" /> Thursday, November 7,
        2019
      </p>
      <p>
        <Icons name={["fas", "calendar-day"]} size="xs" /> Washington, DC
      </p>
      <p>
        <Icons name={["fas", "calendar-day"]} size="xs" /> 9:00-10:00am
      </p>
    </InformationBanner>
  ));

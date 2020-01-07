import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import "./Button.css";

storiesOf("Button", module)
  .add("light-pink", () => <Button label="Book Now" type="light-pink" />)

  .add("dark-pink", () => <Button label="DONE" type="dark-pink" />)

  .add("red", () => (
    <Button label="Browse Dresses" type="red" large />
  ))

  .add("grey", () => (
    <Button label="Modern Trousseau Bride" type="grey" large />
  ))

  .add("white", () => (
    <Button label="Book Appointment" type="white" large />
  ));

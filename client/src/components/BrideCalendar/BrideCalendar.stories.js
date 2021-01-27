import React from "react";
import { storiesOf } from "@storybook/react";
import './BrideCalendar.css';

import BrideCalendar from './BrideCalendar'

function handleClick(event) {
  console.log(event.target.value);
}

function handleChange(event) {
  event.preventDefault();
  event.onChange(event.target.value);
}

storiesOf("BrideInfo", module)
  .add("Menu", (props) => (
    <BrideCalendar />
  ))
 


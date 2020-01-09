import React from "react";
import { storiesOf } from "@storybook/react";
import { configure } from "@storybook/react";

import BrideInfo from './BrideInfo'

function handleClick(e) {
  e.preventDefault();
  alert("You clicked the button");
}

storiesOf("BrideInfo", module)
  .add("Primary", () => (
    <BrideInfo 
    label={"Requested Date*"} 
    name={"Requested Date"} 
    value={"November 12"} 
    min={"February 29, 2020"} 
    step={"1"} 
    max={"February 28, 2022"} 
    onChange={e => useState({ value: e.target.value })} />
  ))
 

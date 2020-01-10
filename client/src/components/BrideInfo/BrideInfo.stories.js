import React from "react";
import { storiesOf } from "@storybook/react";


import BrideInfo from './BrideInfo'

function handleClick(event) {
  console.log(event.target.value);
}

function handleChange(event) {
  event.preventDefault();
  event.onChange(event.target.value);
}

storiesOf("BrideInfo", module)
  .add("Menu", (props) => (
    <BrideInfo onClick={handleClick} onChange={handleChange}/>
  ))
 

import React from "react";
import { storiesOf } from "@storybook/react";
import { configure } from "@storybook/react";

const loaderFn = () => ([
  require('../TextInputComponent/TextInput.stories'),
  require('../DatePicker/DatePicker.stories'),
]);

configure(loaderFn, module);

function handleClick(e) {
  e.preventDefault();
  alert("You clicked the button");
}

storiesOf("Button", module)
  .add("Primary", () => (
    <DatePicker label="Requested Date*" onChnage={handleClick} />
  ))
  .add("Success", () => <Button label="Success" type="success" />)
 

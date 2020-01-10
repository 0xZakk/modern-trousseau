import React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from "./TextArea";

storiesOf("Text", module).add("Default", () => (
  <TextArea
    label={"Is there anything else you want us to know?"}
    value={
      "Tell us about your dream dress! Do you have any Modern Trousseau favorites?"
    }
    onChange={onChange}
  />
));

function onChange() {
  console.log("You changed");
}

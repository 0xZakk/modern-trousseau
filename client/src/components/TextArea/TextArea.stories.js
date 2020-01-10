import React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from "./TextArea";

storiesOf("Text", module).add("Default", () => (
  <TextArea
    hasLabel={true}
    label={"Is there anything else you want us to know?"}
    placeholder={
      "Tell us about your dream dress! Do you have any Modern Trousseau favorites?"
    }
    onChange={handleChange}
  />
));

function handleChange() {
  console.log("You changed");
}

import React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from "./TextArea";

storiesOf("Text", module).add("Default", () => (
  <TextArea
    pClassList="text-area-title"
    titleClassList="title"
    textAreaClassList="text-area"
    title={"Is there anything else you want us to know?"}
    innerText={
      "Tell us about your dream dress! Do you have any Modern Trousseau favorites?"
    }
    onChange={onChange}
  />
));

function onChange() {
  console.log("You changed");
}

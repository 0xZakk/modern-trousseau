import React from "react";
import { storiesOf } from "@storybook/react";

import TextInput from "./TextInput";

storiesOf("TextInput", module)
  .add("Primary", () => (
    <TextInput labelName={""} type={"text"} placeholder={"Sign up here"} />
  ))
  .add("Full Name", () => (
    <TextInput labelName={"Full Name*"} type={"text"} placeholder={""} />
  ))
  .add("Email", () => (
    <TextInput labelName={"Email*"} type={"email"} placeholder={""} />
  ))
  .add("Phone Number", () => (
    <TextInput labelName={"Phone Number*"} type={"number"} placeholder={""} />
  ))
  .add("Number of Guests", () => (
    <TextInput
      labelName={"Number of Guests"}
      type={"number"}
      placeholder={""}
    />
  ));

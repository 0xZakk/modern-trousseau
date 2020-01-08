import React from "react";
import { storiesOf } from "@storybook/react";

import TextInput from "./TextInput";

storiesOf("TextInput", module)
  .add("Primary", () => (
    <TextInput type={"text"} placeholder={"Sign up here"} />
  ))
  .add("Full Name", () => (
    <TextInput label={"Full Name*"} type={"text"} placeholder={""} />
  ))
  .add("Email", () => (
    <TextInput label={"Email*"} type={"email"} placeholder={""} />
  ))
  .add("Phone Number", () => (
    <TextInput label={"Phone Number*"} type={"number"} placeholder={""} />
  ))
  .add("Number of Guests", () => (
    <TextInput label={"Number of Guests"} type={"number"} placeholder={""} />
  ));

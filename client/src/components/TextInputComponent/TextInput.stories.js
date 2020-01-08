import React from "react";
import { storiesOf } from "@storybook/react";

import TextInput from "./TextInput";

storiesOf("TextInput", module)
  .add("Primary", () => (
    <TextInput
      children={"blah"}
      labelName={""}
      type={"text"}
      placeholder={"Sign up here"}
    ></TextInput>
  ))
  .add("Full Name", () => (
    <TextInput
      labelName={"Full Name*"}
      type={"text"}
      placeholder={""}
    ></TextInput>
  ))
  .add("Email", () => (
    <TextInput labelName={"Email*"} type={"email"} placeholder={""}></TextInput>
  ))
  .add("Phone Number", () => (
    <TextInput
      labelName={"Phone Number*"}
      type={"number"}
      placeholder={""}
    ></TextInput>
  ))
  .add("Number of Guests", () => (
    <TextInput
      labelName={"Number of Guests"}
      type={"number"}
      placeholder={""}
    ></TextInput>
  ));

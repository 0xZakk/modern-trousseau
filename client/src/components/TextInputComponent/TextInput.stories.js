import React from "react";
import { storiesOf } from "@storybook/react";

import TextInput from "./TextInput";

storiesOf("TextInput", module).add("Primary", () => (
  <TextInput label={"Sign up here"}></TextInput>
));

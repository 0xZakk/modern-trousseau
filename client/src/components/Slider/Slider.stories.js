import React from "react";
import { storiesOf } from "@storybook/react";

import Slider from "./Slider";

storiesOf("Slider", module).add("Gown Display Static", () => (
  <Slider type="gowns" />
));

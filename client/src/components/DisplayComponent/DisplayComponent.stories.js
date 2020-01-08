import React from "react";
import { storiesOf } from "@storybook/react";

import DisplayComponent from "../DisplayComponent/DisplayComponent";

storiesOf("Gown-Display-Component", module).add("Gown Display Component", () => (
    <DisplayComponent type="gowns-stack" />
  ));

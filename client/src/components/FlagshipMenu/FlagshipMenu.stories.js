import React from "react";
import { storiesOf } from "@storybook/react";
//import StoryRouter from "storybook-react-router";

import FlagshipMenu from "./FlagshipMenu";

storiesOf("FlagshipMenu", module)
  //.addDecorator(StoryRouter())
  .add("FlagshipMenu", () => <FlagshipMenu />);

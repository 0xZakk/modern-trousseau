import React from "react";
import { storiesOf } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import NavMenu from "./NavMenu";

storiesOf("NavMenu", module)
  .addDecorator(StoryRouter())
  .add("NavMenu", () => <NavMenu />);

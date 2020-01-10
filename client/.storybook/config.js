import { configure, addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";

addDecorator(StoryRouter());

configure(require.context("../src/components", true, /\.stories\.js$/), module);

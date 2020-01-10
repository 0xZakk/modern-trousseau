import { configure, addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import "../src/App.css";

addDecorator(StoryRouter());

configure(require.context("../src/components", true, /\.stories\.js$/), module);

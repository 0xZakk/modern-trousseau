import { configure } from "@storybook/react";
import "../src/App.css";

configure(require.context("../src/components", true, /\.stories\.js$/), module);

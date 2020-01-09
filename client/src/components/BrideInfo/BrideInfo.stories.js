import React from "react";
import { storiesOf } from "@storybook/react";

import BrideInfo from "./BrideInfo";

function handleClick(e) {
  e.preventDefault();
  alert("You clicked the button");
}

storiesOf("Button", module)
  .add("Primary", () => (
    <Button label="Primary" type="primary" onClick={handleClick} />
  ))
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Large", () => <Button label="Large Button" type="primary" large />);

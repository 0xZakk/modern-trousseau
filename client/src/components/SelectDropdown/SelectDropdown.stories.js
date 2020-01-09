import React from "react";
import { storiesOf } from "@storybook/react";
import SelectDropdown from "./SelectDropdown";

function handleClick(props) {
  console.log(props);
}

storiesOf("SelectDropdown", module).add("SelectDropdown", () => (
  <SelectDropdown
    option={[
      "Baltimore, MD",
      "Charleston, SC",
      "Long Island, NY",
      "Louisville, KY",
      "Nashville, TN",
      "New Haven, CT",
      "Washington, DC"
    ]}
    onClick={handleClick}
  />
));

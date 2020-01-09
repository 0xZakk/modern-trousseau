import React from "react";
import { storiesOf } from "@storybook/react";

import SeasonCollectionImageCardComponent from "./SeasonCollectionImage";

storiesOf("SeasonCollectionImageCardComponent", module).add(
  "SeasonCollection",
  () => <SeasonCollectionImageCardComponent season={"Fall"} year={"2020"} />
);

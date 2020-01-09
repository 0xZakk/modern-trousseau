import React from "react";
import { storiesOf } from "@storybook/react";
import imageFile1 from "../SeasonCollectionImageCardComponent/SeasonCollectionAssetDirectory/Image 1.svg";
import imageFile2 from "../SeasonCollectionImageCardComponent/SeasonCollectionAssetDirectory/Image 2.svg";

import SeasonCollectionImageCardComponent from "./SeasonCollectionImage";

storiesOf("SeasonCollectionImageCardComponent", module).add(
  "SeasonCollection",
  () => (
    <SeasonCollectionImageCardComponent
      image1={imageFile1}
      image2={imageFile2}
      season={"Fall"}
      year={"2020"}
    />
  )
);

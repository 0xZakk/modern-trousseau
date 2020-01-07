// import imageFile1 from "../../Images/Fall-2020-1.png";
// import imageFile2 from "../../Images/Fall-2020-2.png";
// import imageFile3 from "../../Images/Spring-2020-1.jpeg";
// import imageFile4 from "../../Images/Spring-2020-2.jpeg";
// import imageFile5 from "../../Images/Trending-Now-1.jpeg";
// import imageFile6 from "../../Images/Trending-Now-2.jpeg";
// import imageFile7 from "../../Images/Classics-1.jpeg";
// import imageFile8 from "../../Images/Classics-2.jpeg";

import React from "react";
import { storiesOf } from "@storybook/react";

import Slider from "./Slider";


storiesOf("Slider", module).add("Gown Display Static", () => (
  <Slider type="gowns" />
));

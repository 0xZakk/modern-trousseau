import React from "react";
import { storiesOf } from "@storybook/react";

import Slider from "../Slider/Slider";
import DisplayComponent from "./DisplayComponent";

import imageFile1 from "../../Images/Fall-2020-1.png";
import imageFile2 from "../../Images/Fall-2020-2.png";
import imageFile3 from "../../Images/Spring-2020-1.jpeg";
import imageFile4 from "../../Images/Spring-2020-2.jpeg";
import imageFile5 from "../../Images/Trending-Now-1.jpeg";
import imageFile6 from "../../Images/Trending-Now-2.jpeg";
import imageFile7 from "../../Images/Classics-1.jpeg";
import imageFile8 from "../../Images/Classics-2.jpeg";

const slideData = [
  {
    title: "Fall 2020 Collection",
    imga: imageFile1,
    imgb: imageFile2,
    labela: "LUCA",
    labelb: "VIDA",
    index: 0
  },
  {
    title: "Fall 2020 Collection",
    imga: imageFile3,
    imgb: imageFile4,
    labela: "AlWAYS",
    labelb: "BELIZE",
    index: 1
  },
  {
    title: "Fall 2020 Collection",
    imga: imageFile5,
    imgb: imageFile6,
    labela: "ALICE",
    labelb: "EVELYN",
    index: 2
  },
  {
    title: "Fall 2020 Collection",
    imga: imageFile7,
    imgb: imageFile8,
    labela: "AINSLEY",
    labelb: "ANNIE",
    index: 3
  }
];

storiesOf("Gown-Display-Component", module).add("Gown Display Component", () => (
    <DisplayComponent slideData={slideData} type="gowns-stack" />
  ));

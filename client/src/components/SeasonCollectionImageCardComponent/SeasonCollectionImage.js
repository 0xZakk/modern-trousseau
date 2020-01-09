import React from "react";
import "./SeasonCollectionImage.css";
import imageFile1 from "../SeasonCollectionImageCardComponent/SeasonCollectionAssetDirectory/Image 1.svg";
import imageFile2 from "../SeasonCollectionImageCardComponent/SeasonCollectionAssetDirectory/Image 2.svg";

let season = "Fall";
let year = "2020";

const SeasonCollectionImageCardComponent = props => (
  <div>
    <div className="season-collection-square">
      <div className="season-collection-image-container">
        <img className="season-collection-image" src={imageFile1} alt="img" />
        <img className="season-collection-image" src={imageFile2} alt="img" />
      </div>
      <p className="season-collection-text">
        {season} {year} Collection
      </p>
    </div>
  </div>
);

export default SeasonCollectionImageCardComponent;

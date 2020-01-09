import React from "react";
import "./SeasonCollectionImage.css";
import imageFile1 from "../SeasonCollectionImageCardComponent/SeasonCollectionAssetDirectory/Image 1.svg";
import imageFile2 from "../SeasonCollectionImageCardComponent/SeasonCollectionAssetDirectory/Image 2.svg";

const SeasonCollectionImageCardComponent = props => (
  <div>
    <div className="season-collection-square">
      <div className="season-collection-image-container">
        <img
          className="season-collection-image"
          src={props.image1}
          alt="image"
        />
        <img
          className="season-collection-image"
          src={props.image2}
          alt="image"
        />
      </div>

      <p className="season-collection-text">
        {props.season} {props.year} Collection
      </p>
    </div>
  </div>
);

export default SeasonCollectionImageCardComponent;

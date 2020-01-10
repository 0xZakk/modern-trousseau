import React from "react";
import "./SeasonCollectionImage.css";

const SeasonCollectionImageCardComponent = props => (
  <div>
    <div className="primary-pink">
      <div className="season-collection-image-container">
        <img src={props.image1} alt="image" />
        <img src={props.image2} alt="image" />
      </div>

      <h5 className="season-collection-text">
        {props.season} {props.year} Collection
      </h5>
    </div>
  </div>
);

export default SeasonCollectionImageCardComponent;

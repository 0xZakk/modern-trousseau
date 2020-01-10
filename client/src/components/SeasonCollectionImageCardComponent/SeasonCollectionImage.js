import React from "react";
import "./SeasonCollectionImage.css";

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

      <h2 className="season-collection-text">
        {props.season} {props.year} Collection
      </h2>
    </div>
  </div>
);

export default SeasonCollectionImageCardComponent;

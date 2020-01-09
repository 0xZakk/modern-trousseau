import React from 'react'
import './seasoncollectionimg.css'
import imageFile1 from "./Image 1.svg"
import imageFile2 from "./Image 2.svg"

let season = "Fall";
let year = "2020";

const SeasonCollectionImageCardComponent = (props) =>

    <div>

        <div className="seasonCollectionSquare">
            <div className="seasonCollectionImgContainer">
                <img className="seasonCollectionImg" src={imageFile1} />
                <img className="seasonCollectionImg" src={imageFile2} />
            </div>

            <p className="seasonCollectionP">{season} {year} Collection</p>

        </div >
    </div>

export default SeasonCollectionImageCardComponent
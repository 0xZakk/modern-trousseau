import imageFile1 from "../../Images/Fall-2020-1.png";
import imageFile2 from "../../Images/Fall-2020-2.png";
import imageFile3 from "../../Images/Spring-2020-1.jpeg";
import imageFile4 from "../../Images/Spring-2020-2.jpeg";
import imageFile5 from "../../Images/Trending-Now-1.jpeg";
import imageFile6 from "../../Images/Trending-Now-2.jpeg";
import imageFile7 from "../../Images/Classics-1.jpeg";
import imageFile8 from "../../Images/Classics-2.jpeg";

import React from "react";
import ReactDOM from "react-dom";
import "./Slider.css";




const slides = {
    "properties": [
    {
      title: "Fall 2020 Collection",
      imga: imageFile1,
      imgb: imageFile2,
      labela: "LUCA",
      labelb: "VIDA",
      index: 0
    },
    {
      title: "Spring 2020 Collection",
      imga: imageFile3,
      imgb: imageFile4,
      labela: "AlWAYS",
      labelb: "BELIZE",      
      index: 1
    },
    {
      title: "Trending Now",
      imga: imageFile5,
      imgb: imageFile6,
      labela: "ALICE",
      labelb: "EVELYN",
      index: 2
    },
    {
      title: "Classics",
      imga: imageFile7,
      imgb: imageFile8,
      labela: "AINSLEY",
      labelb: "ANNIE",
      index: 3
    }
  ]
}

{/* <div className='slide slide1'>
//             <p className='title'>{slides[0].title}</p>
//             <div className='slide-container'>
//                 <div className='image-1'>
//                     <img src={slides[0].imga}/>
//                     <p>{slides[0].label1a}</p>
//                 </div>
//                 <div className='image-2'>
//                     <img src={imageFile2}/>
//                     <p>{slides[0].label1b}</p>
//                 </div> */}


const Card = ({property}) => {
        const {title, imga, imgb, labela, labelb, index} = property
        return (
                <div id={`slide-${index}`} className="slide">
                    <p className='title'>{`${title}`}</p>
                    <div className='slide-container'>
                        <div className='image-1'>
                            <img src={imga}/>
                            <p>{`${labela}`}</p>
                        </div>
                        <div className='image-2'>
                            <img src={imgb}/>
                            <p>{`${labelb}`}</p>
                        </div>
                        {/* <p>{`${index}`}</p> */}
                        {/* <p>{`slide-${index}`}</p> */}
                    </div>
                </div>
            )
        }


class Slider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            properties: slides.properties,
            property: slides.properties[0]
        }
    }

nextProperty = () => {
    const newIndex = this.state.property.index+1
    this.setState({
        property: slides.properties[newIndex]
    })
}

render() {
    const {properties, property} = this.state
    return (
        <div>
            <div className='card'>
                <div className="slide">
                    <Card property={property} />
                </div>
                <button className='button'
                    onClick={() => this.nextProperty()}
                    disabled={property.index ===
                    slides.properties.length-1}
                >&#10095;
                </button>
            </div>
        </div>
    )
}
} 

export default Slider


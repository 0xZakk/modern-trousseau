import React from "react";
import ReactDOM from "react-dom";
import Slider from "../Slider/Slider"
import "./DisplayComponent.css";

class DisplayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: this.props.slideData,
      property: this.props.slideData[0]
    };
  }
  
  render() {
    return (
      <div>
        <h3 className="display-component-title">GOWNS</h3>
        <Slider className="slider-1"></Slider>
        <Slider className="slider-2"></Slider>
        <Slider className="slider-3"></Slider>
        <Slider className="slider-4"></Slider>
      </div>
    );
  }
}

export default DisplayComponent;









// const Card = ({ property }) => {
//   const { title, imga, imgb, labela, labelb, index } = property;
//   return (
//     <div id={`slide-${index}`} className="display-component-slide">
//       <p className="display-component-collection-title card-part">{`${title}`}</p>
//       <div className="display-component-container">
//         <div className="image-1">
//           <img src={imga} className="display-component-pic"/>
//           <p className="display-component-text">{`${labela}`}</p>
//         </div>
//         <div className="image-2">
//           <img src={imgb} className="display-component-pic"/>
//           <p className="display-component-text">{`${labelb}`}</p>
//         </div>
//       </div>
//     </div>
//   );
// };


{/* <div className="display-component-card display-component-card-1">
  <div className="display-component-slide">
    <Card property={property} />
  </div>
  <button
    className="display-component-button"
    onClick={() => this.nextProperty()}
    disabled={property.index === slides.properties.length - 1}
  >
    &#10095;
  </button>
</div>
<div className="display-component-card display-component-card-2">
  <div className="display-component-slide">
    <Card property={property} />
  </div>
  <button
    className="display-component-button"
    onClick={() => this.nextProperty()}
    disabled={property.index === slides.properties.length - 1}
  >
    &#10095;
  </button>
</div> 
<div className="display-component-card display-component-card-2">
  <div className="display-component-slide">
    <Card property={property} />
  </div>
  <button
    className="display-component-button"
    onClick={() => this.nextProperty()}
    disabled={property.index === slides.properties.length - 1}
  >
    &#10095;
  </button>
</div> 
<div className="display-component-card display-component-card-2">
  <div className="display-component-slide">
    <Card property={property} />
  </div>
  <button
    className="display-component-button"
    onClick={() => this.nextProperty()}
    disabled={property.index === slides.properties.length - 1}
  >
    &#10095;
  </button>
</div>  */}
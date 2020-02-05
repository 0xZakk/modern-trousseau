import React from "react";
import ReactDOM from "react-dom";
import Slider from "../Slider/Slider"
// import SignupCard from "./SignupCard"
// import slideData from "../Slider/Slider"
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
    console.log(this.state)
    return (
      <div>
        <h3 className="display-component-title">GOWNS</h3>
        <p className='collection-title'>Collection 1</p>
        <Slider slideData={this.state.properties} className=' slideshow collection-1'/>
        <p className='collection-title'>Collection 1</p>
        <Slider slideData={this.state.properties} className=' slideshow collection-2'/>
        <p className='collection-title'>Collection 1</p>
        <Slider slideData={this.state.properties} className=' slideshow collection-3'/>
        <p className='collection-title'>Collection 1</p>
        <Slider slideData={this.state.properties} className=' slideshow collection-4'/>
      </div>
    );
  }
}

export default DisplayComponent;

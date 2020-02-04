import React from "react";
import ReactDOM from "react-dom";
import "./Slider.css";

const Slide = ({ property }) => {
  const { title, imga, imgb, labela, labelb, index } = property;
  return (
    <div id={`slide-${index}`} className="slide">
      <p className="title slide-text">{`${title}`}</p>
      <div className="slide-container">
        <div className="image-1">
          <img src={imga} className="slide-img" />
          <p className="slide-text">{`${labela}`}</p>
        </div>
        <div className="image-2">
          <img src={imgb} className="slide-img" />
          <p className="slide-text">{`${labelb}`}</p>
        </div>
      </div>
    </div>
  );
};

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: this.props.slideData,
      property: this.props.slideData[0]
    };
  }

  prevProperty = () => {
    if (this.state.property.index >= 0) {
      console.log(this.state.property.index);
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    } 
    if (this.state.property.index == 0) {
          console.log(this.state.property.index)
          const newIndex = this.state.property.index - 1;
          this.setState({
          property: this.props.slideData[newIndex]
    });
  }
};


  nextProperty = () => {
    if (this.state.property.index >= 0) {
      console.log(this.state.property.index);
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
    if (this.state.property.index == this.props.slideData.length - 1) {
      console.log(this.state.property.index);
      const newIndex = 0;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <div className="card">
          <button className="button" onClick={() => this.prevProperty()}>
            &#10094;
          </button>
          <div className="slide">
            <Slide property={property} />
          </div>
          <button className="button" onClick={() => this.nextProperty()}>
            &#10095;
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
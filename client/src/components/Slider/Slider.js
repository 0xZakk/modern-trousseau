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
      labelb: "VIDA"
    },
    {
      title: "Spring 2020 Collection",
      imga: imageFile3,
      imgb: imageFile4,
      labela: "AlWAYS",
      labelb: "BELIZE"
    },
    {
      title: "Trending Now",
      imga: imageFile5,
      imgb: imageFile6,
      labela: "ALICE",
      labelb: "EVELYN"
    },
    {
      title: "Classics",
      imga: imageFile7,
      imgb: imageFile8,
      labela: "AINSLEY",
      labelb: "ANNIE"
    }
  ]
}








// const slides = [
//   {
//     title: "Fall 2020 Collection",
//     imga: imageFile1,
//     imgb: imageFile2,
//     labela: "LUCA",
//     labelb: "VIDA"
//   },
//   {
//     title: "Spring 2020 Collection",
//     imga: imageFile3,
//     imgb: imageFile4,
//     labela: "AlWAYS",
//     labelb: "BELIZE"
//   },
//   {
//     title: "Trending Now",
//     imga: imageFile5,
//     imgb: imageFile6,
//     labela: "ALICE",
//     labelb: "EVELYN"
//   },
//   {
//     title: "Classics",
//     imga: imageFile7,
//     imgb: imageFile8,
//     labela: "AINSLEY",
//     labelb: "ANNIE"
//   }
// ];

// // -----FIRST ATTEMPT WITH CSS
// let indSlides = document.querySelectorAll("slide")
// let slideWidth = imageFile1.length * 3
// // function plusDivs(n) {
//     //     showDivs(slideIndex += 1)
//     // }
// var slideIndex = 1;
//     showSlides(slideIndex)
// function plusSlides(n) {
//     showSlides(slideIndex += n)
// }
// // currentSlide = 0
// function showSlides(n) {
//     // indSlides.style.transform = `translateX(-${slideWidth}px)`
//     // currentSlide++
//   }
// ---------------------------------------

// &#10095;






// const Slider = props => {
//   class CarouselRightArrow extends React.Component {
//     render() {
//       return <button onClick={this.props.onClick}> huhu </button>;
//     }
//   }
//   class CarouselSlide extends React.Component {
//     render() {
//       return (
//         <li className={this.props.index == this.props.activeIndex}>
//           <p className="title">{this.props.slide.title}</p>
//           <p className="label1">{this.props.slide.labela}</p>
//           <p className="label2">{this.props.slide.labelb}</p>
//         </li>
//       );
//     }
//   }

 
//   class Carousel extends React.Component {
//     constructor(props) {
//       super(props);
//       this.goToSlide = this.goToSlide.bind(this);
//       this.goToNextSlide = this.goToNextSlide.bind(this);

//       this.state = {
//         activeIndex: 0
//       };
//     }

//     goToSlide(index) {
//       this.setState({ activeIndex: index });
//     }

//     goToNextSlide(e) {
//       e.preventDefault();

//       let index = this.state.activeIndex;
//       let { slides } = this.props;
//       let slidesLength = slides.length - 1;

//       if (index === slidesLength) {
//         index = -1;
//       }

//       ++index;

//       this.setState({ activeIndex: index });
//     }

//     render() {
//       return (
//         <div className="carousel">
//           <ul className="carousel__slides">
//             {this.props.slides.map((slide, index) => (
//               <CarouselSlide
//                 key={index}
//                 index={index}
//                 activeIndex={this.state.activeIndex}
//                 slide={slide}
//               />
//             ))}
//           </ul>

//           <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
//         </div>
//       );
//     }
//   }
// };
// export default Slider;






// render(<Carousel slides={slides} />, carouselContainer);


const Card = ({property}) => {
    const {title} = property
    return (
        <div id={`slide-${index}`} className="slide">
            <p>{`slide-${index}`}</p>
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
        <button
            onClick={() => this.nextProperty()}
            disabled={property.index ===
            slides.properties.length-1}
        >&#10095;
        </button>

            <div className="slide">
                <section>
                    <p>{this.state.properties[0].title}</p>
                </section>

                <Card property={property} />
            </div>
        </div>
    )
}
}




















// const Slider = (props) => {
//     return(
// <div>
//     <div className='slideshow-container'>
//         <div className='slide slide1'>
//             <p className='title'>{slides[0].title}</p>
//             <div className='slide-container'>
//                 <div className='image-1'>
//                     <img src={slides[0].img1a}/>
//                     <p>{slides[0].label1a}</p>
//                 </div>
//                 <div className='image-2'>
//                     <img src={imageFile2}/>
//                     <p>{slides[0].label1b}</p>
//                 </div>
//                 {/* <button onClick={(e) => alert('clicked')}> > </button> */}
//         </div>
//         </div>
//         <div className='slide slide2'>
//             <p className='title'>{slides[1].title}</p>
//             <div className='slide-container'>
//                 <div className='image-1'>
//                     <img src={slides[1].img2a}/>
//                     <p>{slides[1].label2a}</p>
//                 </div>
//                 <div className='image-2'>
//                     <img src={slides[1].img2b}/>
//                     <p>{slides[1].label2b}</p>
//                 </div>
//                 {/* <button onClick={(e) => alert('clicked')}> > </button> */}
//         </div>
//         </div>
//         <div className='slide slide3'>
//             <p className='title'>{slides[2].title}</p>
//             <div className='slide-container'>
//                 <div className='image-1'>
//                     <img src={slides[2].img3a}/>
//                     <p>{slides[2].label3a}</p>
//                 </div>
//                 <div className='image-2'>
//                     <img src={slides[2].img3b}/>
//                     <p>{slides[2].label3b}</p>
//                 </div>
//                 {/* <button onClick={(e) => alert('clicked')}> > </button> */}
//         </div>
//         </div>
//         <div className='slide slide4'>
//             <p className='title'>{slides[3].title}</p>
//             <div className='slide-container'>
//                 <div className='image-1'>
//                     <img src={slides[3].img4b}/>
//                     <p>{slides[3].label4a}</p>
//                 </div>
//                 <div className='image-2'>
//                     <img src={slides[3].img4a}/>
//                     <p>{slides[3].label4b}</p>
//                 </div>
//                 {/* <button onClick={(e) => alert('clicked')}> > </button> */}
//         </div>
//         </div>
//     </div>
//         <button onClick={(e) => showSlides}> &#10095; </button>
// </div>
//     )

// }

// export default Slider

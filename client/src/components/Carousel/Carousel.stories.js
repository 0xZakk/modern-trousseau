import React from 'react';
import { storiesOf } from '@storybook/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselPics from './CarouselPics';

import Fall1 from '../../Images/Fall-2020-1.png';
import Fall2 from '../../Images/Fall-2020-2.png';
import Spring1 from '../../Images/Spring-2020-1.jpeg';
import Spring2 from '../../Images/Spring-2020-2.jpeg';
import Trending1 from '../../Images/Trending-Now-1.jpeg';
import Trending2 from '../../Images/Trending-Now-2.jpeg';
import Classics1 from '../../Images/Classics-1.jpeg';
import classics2 from '../../Images/Classics-2.jpeg';

const images = [
    Fall1,
    Fall2,
    Spring1,
    Spring2,
    Trending1,
    Trending2,
    Classics1,
    classics2
]

// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'components/DemoCarousel'

function handleClick(e) {
    e.preventDefault();
    alert("You clicked the button")
}

storiesOf('Carousel', module)
    .add('Gown Display', () => 
class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      );
    }
  }
    )
// const carouselSlides = [
//     {
//       title: "Fall 2020 Collection",
//       imgURL: "",
//       image1: "Luca",
//       image2: "Vida"
//     }, 
//     {
//         title: "Spring 2020 Collection",
//         imgURL: "",
//         image1: "Always",
//         image2: "Belize"
//     },
//     {
//         title: "Trending Now",
//         imgURL: "",
//         image1: "Alice",
//         image2: "Evelyn"
//     }, 
//     {
//         title: "Classics",
//         imgURL: "",
//         image1: "Ainsley",
//         image2: "Annie"
//     }
//   ];

// storiesOf('Carousel', module)
//     .add('Gown Display', () => <div>
//                                     <p className='title'>Fall 2020 Collection</p>
//                                     <div className='carousel-container'>
//                                         <div className='image-1'>
//                                             <img src={Fall1}/>
//                                             <p>Luca</p>
//                                         </div>
//                                         <div className='image-2'>
//                                             <img src={Fall2}/>
//                                             <p>Vida</p>
//                                         </div>
//                                         <button onClick={handleClick}> > </button>
//                                     </div>
//                                 </div>)

// client/src/components/Carousel/Carousel.stories.js
// client/src/Images/Fall-2020-1.png






    // .add('Gown Display with Carousel Package', () => <div className='carousel-container'>
    //                                 <Carousel>
    //                                     <div className='image-1'>
    //                                         <img src=''/>
    //                                         <p>fsf</p>
    //                                     </div>
    //                                     {/* <div className='image-2'>
    //                                         <img src=''/>
    //                                         <p>text</p>
    //                                     </div> */}
    //                                     {/* <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow> */}
    //                                 </Carousel>
    //                                 {/* <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow> */}
    //                             </div>)
                    

    // var DemoCarousel = React.createClass({
    //     render() {
    //         return (
    //             <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
    //                 <div>
    //                     <img src="assets/1.jpeg" />
    //                     <p className="legend">Legend 1</p>
    //                 </div>
    //                 <div>
    //                     <img src="assets/2.jpeg" />
    //                     <p className="legend">Legend 2</p>
    //                 </div>
    //                 <div>
    //                     <img src="assets/3.jpeg" />
    //                     <p className="legend">Legend 3</p>
    //                 </div>
    //                 <div>
    //                     <img src="assets/4.jpeg" />
    //                     <p className="legend">Legend 4</p>
    //                 </div>
    //                 <div>
    //                     <img src="assets/5.jpeg" />
    //                     <p className="legend">Legend 5</p>
    //                 </div>
    //                 <div>
    //                     <img src="assets/6.jpeg" />
    //                     <p className="legend">Legend 6</p>
    //                 </div>
    //             </Carousel>
    //         );
    //     }
    // });
    // ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
    
    // Don't forget to include the css in your page 
    // <link rel="stylesheet" href="carousel.css"/>
    // Begin DemoSliderControls

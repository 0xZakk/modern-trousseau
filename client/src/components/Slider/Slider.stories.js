import imageFile1 from "../../Images/Fall-2020-1.png";
import imageFile2 from "../../Images/Fall-2020-2.png";
import imageFile3 from "../../Images/Spring-2020-1.jpeg";
import imageFile4 from "../../Images/Spring-2020-2.jpeg";
import imageFile5 from "../../Images/Trending-Now-1.jpeg";
import imageFile6 from "../../Images/Trending-Now-2.jpeg";
import imageFile7 from "../../Images/Classics-1.jpeg";
import imageFile8 from "../../Images/Classics-2.jpeg";


import React from 'react';
// import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';

import Slider from './Slider';


// import './Slider.css'
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

storiesOf('Slider', module)
    .add('Gown Display Static', () => <Slider type='gowns'/>)
// class GownCarousel extends React.Component {
//                         render() {
                            // return (
                            //     <div>
                            //         <div className='slide1'>
                            //         <p className='title'>Fall 2020 Collection</p>
                            //          <div className='carousel-container'>
                            //              <div className='image-1'>
                            //                  <img src={imageFile1}/>
                            //                 <p>Luca</p>
                            //              </div>
                            //              <div className='image-2'>
                            //                  <img src={imageFile2}/>
                            //                  <p>Vida</p>
                            //              </div>
                            //              <button onClick={(e) => alert('clicked')}> > </button>
                            //          </div>
                            //         </div>
                            //         <div className='slide1'>
                            //         <p className='title'>Fall 2020 Collection</p>
                            //          <div className='carousel-container'>
                            //              <div className='image-1'>
                            //                  <img src={imageFile3}/>
                            //                 <p>Luca</p>
                            //              </div>
                            //              <div className='image-2'>
                            //                  <img src={imageFile4}/>
                            //                  <p>Vida</p>
                            //              </div>
                            //              <button onClick={(e) => alert('clicked')}> > </button>
                            //          </div>
                            //         </div>
                            //         <div className='slide1'>
                            //         <p className='title'>Fall 2020 Collection</p>
                            //          <div className='carousel-container'>
                            //              <div className='image-1'>
                            //                  <img src={imageFile5}/>
                            //                 <p>Luca</p>
                            //              </div>
                            //              <div className='image-2'>
                            //                  <img src={imageFile6}/>
                            //                  <p>Vida</p>
                            //              </div>
                            //              <button onClick={(e) => alert('clicked')}> > </button>
                            //          </div>
                            //         </div>
                            //         <div className='slide1'>
                            //         <p className='title'>Fall 2020 Collection</p>
                            //          <div className='carousel-container'>
                            //              <div className='image-1'>
                            //                  <img src={imageFile7}/>
                            //                 <p>Luca</p>
                            //              </div>
                            //              <div className='image-2'>
                            //                  <img src={imageFile8}/>
                            //                  <p>Vida</p>
                            //              </div>
                            //              <button onClick={(e) => alert('clicked')}> > </button>
                            //          </div>
                            //         </div>
                            //      </div>
                            // )
                //         }
                //     }
                // )
// export default GownCarousel






// storiesOf('Carousel', module)
//     .add('Gown Display Vanilla HTML', () => <div>cscs</div>)
    
                    
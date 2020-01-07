import React from 'react';
import { storiesOf } from '@storybook/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselPics from './CarouselPics';

import imageFile1 from "../../Images/Fall-2020-1.png";
import imageFile2 from "../../Images/Fall-2020-2.png";

storiesOf('Carousel', module).add('Gown Display', () => 
    
    class DemoCarousel extends Component {
        render() {
            return (
                <Carousel>
                    <div>
                        <img src="assets/1.jpeg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="assets/2.jpeg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="assets/3.jpeg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            );
        }
    });

     
    ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
    
                                // <div>
                                //     <p className='title'>Fall 2020 Collection</p>
                                //     <div className='carousel-container'>
                                //         <div className='image-1'>
                                //             <img src="../../Images/Fall-2020-1.png"/>
                                //             <p>Luca</p>
                                //         </div>
                                //         <div className='image-2'>
                                //             <img src="../../Images/Fall-2020-2.png"/>
                                //             <p>Vida</p>
                                //         </div>
                                //         <button> > </button>
                                //     </div>
                                // </div>)









    .add('Gown Display with Carousel Package', () => <div className='carousel-container'>
                                    <Carousel>
                                        <div className='image-1'>
                                            <img src=''/>
                                            <p>fsf</p>
                                        </div>
                                        {/* <div className='image-2'>
                                            <img src=''/>
                                            <p>text</p>
                                        </div> */}
                                        {/* <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow> */}
                                    </Carousel>
                                    {/* <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow> */}
                                </div>)
                    

    .add('Gown Display from codepen', () => <div className='carousel-container'>
                                                <Carousel>
                                                    <div className='image-1'>
                                                        <img src=''/>
                                                        <p>fsf</p>
                                                    </div>
                                                    {/* <div className='image-2'>
                                                        <img src=''/>
                                                        <p>text</p>
                                                    </div> */}
                                                    {/* <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow> */}
                                                </Carousel>
                                                {/* <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow> */}
                                            </div>)
                                

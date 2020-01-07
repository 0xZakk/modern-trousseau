import imageFile1 from "../../Images/Fall-2020-1.png";
import imageFile2 from "../../Images/Fall-2020-2.png";


import React from 'react';
import { storiesOf } from '@storybook/react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
// import { render } from 'react-dom';
// import Carousel from 'react-carousel';
import './Carousel.css'
import CarouselPics from './CarouselPics';


// storiesOf('Carousel', module)
//     .add('Gown Display', () => 
//                 <Carousel>
//                     <div>
//                         <img src="{imageFile1}" />
//                         <p className="legend">Legend 1</p>
//                     </div>
//                     <div>
//                         <img src="assets/2.jpeg" />
//                         <p className="legend">Legend 2</p>
//                     </div>
//                     <div>
//                         <img src="assets/3.jpeg" />
//                         <p className="legend">Legend 3</p>
//                     </div>
//                 </Carousel>
//             );

    // ReactDOM.render(<SlidesShow />, document.querySelector('.demo-carousel'));










// const DemoCarousel = React.createClass({
//     render() {
//         return (


// storiesOf('Carousel', module)
//     .add('Gown Display', () => 
//             <Carousel showArrows={true} onClick={(e) => alert('clicked') }>
//                 <div>
//                     <img src={imageFile1} />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src={imageFile2} />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src={imageFile1} />
//                     <p className="legend">Legend 3</p>
//                 </div>
//                 <div>
//                     <img src={imageFile2} />
//                     <p className="legend">Legend 4</p>
//                 </div>
//                 <div>
//                     <img src={imageFile1} />
//                     <p className="legend">Legend 5</p>
//                 </div>
//                 <div>
//                     <img src={imageFile2} />
//                     <p className="legend">Legend 6</p>
//                 </div>
//             </Carousel>
//         );



//     }
// });
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));






// const MyCarousel = ({ slideTime }) => {
//     const carouselBehavior = useCarousel(slideTime);
//     return <div className="my-carousel">...</div>;
//   };

// const [current, setCurrent] = React.useState(0);

// React.useEffect(() => {
//     const next = (current + 1) % slides.length;
//     const id = setTimeout(() => setCurrent(next), time);
//     return () => clearTimeout(id);
//   }, [current]);




// -------------

storiesOf('Carousel', module)
    .add('Gown Display', () => 
                                <div>
                                    <p className='title'>Fall 2020 Collection</p>
                                     <div className='carousel-container'>
                                         <div className='image-1'>
                                             <img src={imageFile1}/>
                                            <p>Luca</p>
                                         </div>
                                         <div className='image-2'>
                                             <img src={imageFile2}/>
                                             <p>Vida</p>
                                         </div>
                                         <button onClick={(e) => alert('clicked')}> > </button>
                                     </div>
                                 </div>)
    
    
    
    
    
    
    
    
    
    
    
    
{/* <div class="gallery-container">
    <ul class="gallery js-gallery">
      <li class="gallery__item js-gallery-item" style="background-image: url(`imageFile1`)"></li>
      <li class="gallery__item js-gallery-item" style="background-image: url(`imageFile1`)"></li>
      <li class="gallery__item js-gallery-item" style="background-image: url(`imageFile1`)"></li>
      <li class="gallery__item js-gallery-item" style="background-image: url(`imageFile1`)"></li>
    </ul>
</div> */}
    









    // .add('Gown Display with Carousel Package', () => <div className='carousel-container1'>
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
                    

    // .add('Gown Display from codepen', () => <div className='carousel-container2'>
    //                                             <Carousel>
    //                                                 <div className='image-1'>
    //                                                     <img src=''/>
    //                                                     <p>fsf</p>
    //                                                 </div>
    //                                                 {/* <div className='image-2'>
    //                                                     <img src=''/>
    //                                                     <p>text</p>
    //                                                 </div> */}
    //                                                 {/* <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow> */}
    //                                             </Carousel>
    //                                             {/* <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow> */}
    //                                         </div>)
                                

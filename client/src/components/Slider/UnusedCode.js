

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




// ------SECOND ATTEMPT WITH IDEAS FROM CODEPEN EXAMPLE



// const slides = [
//     {
//               title: "Fall 2020 Collection",
//               imga: imageFile1,
//               imgb: imageFile2,
//               labela: "LUCA",
//               labelb: "VIDA"
//             },
//             {
//               title: "Spring 2020 Collection",
//               imga: imageFile3,
//               imgb: imageFile4,
//               labela: "AlWAYS",
//               labelb: "BELIZE"
//             },
//             {
//               title: "Trending Now",
//               imga: imageFile5,
//               imgb: imageFile6,
//               labela: "ALICE",
//               labelb: "EVELYN"
//             },
//             {
//               title: "Classics",
//               imga: imageFile7,
//               imgb: imageFile8,
//               labela: "AINSLEY",
//               labelb: "ANNIE"
//             }
//           ]
    

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









        
        
        
        
        
        
        // ------THIRD ATTEMPT WITH WALKTHROUGH VIDEO SAME ERRORS
        // ------AS SECOND ATTEMPT




















// ------SLIDES IN PLACE TO USE      ---MAYBE---




// const slides = [
//     {
//       title: "Fall 2020 Collection",
//       imga: imageFile1,
//       imgb: imageFile2,
//       labela: "LUCA",
//       labelb: "VIDA"
//     },
//     {
//       title: "Spring 2020 Collection",
//       imga: imageFile3,
//       imgb: imageFile4,
//       labela: "AlWAYS",
//       labelb: "BELIZE"
//     },
//     {
//       title: "Trending Now",
//       imga: imageFile5,
//       imgb: imageFile6,
//       labela: "ALICE",
//       labelb: "EVELYN"
//     },
//     {
//       title: "Classics",
//       imga: imageFile7,
//       imgb: imageFile8,
//       labela: "AINSLEY",
//       labelb: "ANNIE"
//     }
//   ]
  

// const Slider = (props) => {
//     return(
// <div>
//     <div className='slideshow-container'>
//         <div className='slide slide1'>
//             <p className='title'>{slides[0].title}</p>
//             <div className='slide-container'>
//                 <div className='image-1'>
//                     <img src={slides[0].imga}/>
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
//                     <img src={slides[1].imga}/>
//                     <p>{slides[1].label2a}</p>
//                 </div>
//                 <div className='image-2'>
//                     <img src={slides[1].imgb}/>
//                     <p>{slides[1].label2b}</p>
//                 </div>
//                 {/* <button onClick={(e) => alert('clicked')}> > </button> */}
//         </div>
//         </div>
//         <div className='slide slide3'>
//             <p className='title'>{slides[2].title}</p>
//             <div className='slide-container'>
//                 <div className='image-1'>
//                     <img src={slides[2].imga}/>
//                     <p>{slides[2].label3a}</p>
//                 </div>
//                 <div className='image-2'>
//                     <img src={slides[2].imgb}/>
//                     <p>{slides[2].label3b}</p>
//                 </div>
//                 {/* <button onClick={(e) => alert('clicked')}> > </button> */}
//         </div>
//         </div>
//         <div className='slide slide4'>
//             <p className='title'>{slides[3].title}</p>
//             <div className='slide-container'>
//                 <div className='image-1'>
//                     <img src={slides[3].imgb}/>
//                     <p>{slides[3].label4a}</p>
//                 </div>
//                 <div className='image-2'>
//                     <img src={slides[3].imga}/>
//                     <p>{slides[3].label4b}</p>
//                 </div>
//                 {/* <button onClick={(e) => alert('clicked')}> > </button> */}
//         </div>
//         </div>
//     </div>
//         <button onClick={(e) => alert('click')}> &#10095; </button>
// </div>
//     )

// }

// export default Slider




// Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
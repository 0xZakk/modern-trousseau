import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Gallery, GalleryImage } from "react-gesture-gallery";
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
// const [index, setIndex] = React.useState(0);

// const images = [
//   {src: Fall1},
//   {src: Fall2},
//   {src: Spring1},
//   {src: Spring2},
//   {src: Trending1},
//   {src: Trending2},
//   {src: Classics1},
//   {src: Classics2}
// ];

storiesOf('Carousel', module).add('Gown Display', () =>
    class GownCarousel extends Component() {
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
    }
    )

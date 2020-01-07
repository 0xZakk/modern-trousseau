import imageFile1 from "../../Images/Fall-2020-1.png";
import imageFile2 from "../../Images/Fall-2020-2.png";
import imageFile3 from "../../Images/Spring-2020-1.jpeg";
import imageFile4 from "../../Images/Spring-2020-2.jpeg";
import imageFile5 from "../../Images/Trending-Now-1.jpeg";
import imageFile6 from "../../Images/Trending-Now-2.jpeg";
import imageFile7 from "../../Images/Classics-1.jpeg";
import imageFile8 from "../../Images/Classics-2.jpeg";


import React from 'react'
import './Slider.css'

let types = ['gowns']

const slides = [
    {
        title: "Fall 2020 Collection",
        img1a: imageFile1,
        img1b: imageFile2,
        label1a: "LUCA",
        label1b: "VIDA"
    },
    {
        title: "Spring 2020 Collection",
        img2a: imageFile3,
        img2b: imageFile4,
        label2a: "AlWAYS",
        label2b: "BELIZE"
    },
    {
        title: "Trending Now",
        img3a: imageFile5,
        img3b: imageFile6,
        label3a: "ALICE",
        label3b: "EVELYN"
    },
    {
        title: "Classics",
        img4a: imageFile7,
        img4b: imageFile8,
        label4a: "AINSLEY",
        label4b: "ANNIE"
    }
]


// function plusDivs(n) {
    //     showDivs(slideIndex += 1)
    // }
    
var slideIndex = 1;
    showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
  }
}




const Slider = (props) => {
    return(
<div>
    <div className='slideshow-container'>
        <div className='slide slide1'>
            <p className='title'>{slides[0].title}</p>
            <div className='slide-container'>
                <div className='image-1'>
                    <img src={slides[0].img1a}/>
                    <p>{slides[0].label1a}</p>
                </div>
                <div className='image-2'>
                    <img src={imageFile2}/>
                    <p>{slides[0].label1b}</p>
                </div>
                {/* <button onClick={(e) => alert('clicked')}> > </button> */}
        </div>
        </div>
        <div className='slide slide2'>
            <p className='title'>{slides[1].title}</p>
            <div className='slide-container'>
                <div className='image-1'>
                    <img src={slides[1].img2a}/>
                    <p>{slides[1].label2a}</p>
                </div>
                <div className='image-2'>
                    <img src={slides[1].img2b}/>
                    <p>{slides[1].label2b}</p>
                </div>
                {/* <button onClick={(e) => alert('clicked')}> > </button> */}
        </div>
        </div>
        <div className='slide slide3'>
            <p className='title'>{slides[2].title}</p>
            <div className='slide-container'>
                <div className='image-1'>
                    <img src={slides[2].img3a}/>
                    <p>{slides[2].label3a}</p>
                </div>
                <div className='image-2'>
                    <img src={slides[2].img3b}/>
                    <p>{slides[2].label3b}</p>
                </div>
                {/* <button onClick={(e) => alert('clicked')}> > </button> */}
        </div>
        </div>
        <div className='slide slide4'>
            <p className='title'>{slides[3].title}</p>
            <div className='slide-container'>
                <div className='image-1'>
                    <img src={slides[3].img4b}/>
                    <p>{slides[3].label4a}</p>
                </div>
                <div className='image-2'>
                    <img src={slides[3].img4a}/>
                    <p>{slides[3].label4b}</p>
                </div>
                {/* <button onClick={(e) => alert('clicked')}> > </button> */}
        </div>
        </div>
    </div>
        <button onClick={(e) => plusSlides}> &#10095; </button>
</div>
    )

}

export default Slider


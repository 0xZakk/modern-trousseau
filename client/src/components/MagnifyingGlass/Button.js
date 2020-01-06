import React from 'react'
import './Button.css'
import imageFile from '../../images/Search Icon_outlined.svg';

const image = {
  src: imageFile,
  alt: 'my image',
};

function handleClick(e) {
  e.preventDefault();
  alert("You clicked the button");
}

const Button = (props) => <button><img src={image.src} width='13px' alt="Search Image" onClick={props.onClick}/></button>

export default Button

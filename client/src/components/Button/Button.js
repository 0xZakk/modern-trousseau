import React from 'react'
import './Button.css'



const Button = (props) => {
let classList = "button";
let types = ['primary','details']
 
return <button classNme={classList} onClick={props.onClick}>{props.label}</button>
}

export default Button;
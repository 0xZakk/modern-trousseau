import React from 'react'
import './Button.css'



const Button = (props) => {
let classList = "button";
let types = ['primary', 'details']
if (types.includes(props.type)) {
    classList += ` button-${props.type}`
}
 
return <button className={classList} onClick={props.onClick}>{props.label}</button>
}

export default Button;
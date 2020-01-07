import React from 'react'
import './Button.css'

const Button = (props) => {
 let classList ='';
 let types = ['primary', 'details']
 if (types.includes(props.type)) {
     classList += `button-${props.type}`
 }
}


export default Button
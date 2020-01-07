import React from 'react'
import './Button.css'

const Button = (props) => <button>{props.children}</button>
 let classList ='';

 let types = ['primary', 'details']

 if (types.includes(props.type)) {
     classList += `button-${props.type}`
 }


export default Button
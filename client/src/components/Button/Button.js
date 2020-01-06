import React from 'react';
import './Button.css'



const Button = (props) => {
    let classList = 'button'
    let types = ['light-pink']
    if (types.includes(props.type)) {
        classList += `button-${props.type}`
    }

    return <button className={classList}> {props.label}</button>
}

export default Button

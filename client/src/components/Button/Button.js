import React from 'react';
import './Button.css'



const Button = (props) => {
    let classList = 'button'
    let types = ['light-pink', 'dark-pink', 'small-grey', 'large-red']

    if (types.includes(props.type)) {
        classList += ` button-${props.type} `
    }

    if (props.large) {
        classList += ` large-red`
    }

    return <button className={classList}> {props.label}</button>
}

export default Button

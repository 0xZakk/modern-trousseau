import React from 'react';
import './Button.css'



const Button = (props) => {
    let classList = 'button'
    let types = ['light-pink', 'dark-pink', 'small-grey', 'large-red', 'large-grey', 'large-white']

    if (types.includes(props.type)) {
        classList += ` button-${props.type} `
    }

    if (props.large) {
        classList += ` large-red, large-grey, large white`
    }

    return <button className={classList}> {props.label}</button>
}

export default Button

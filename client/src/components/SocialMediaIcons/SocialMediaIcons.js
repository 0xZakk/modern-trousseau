import React from 'react';
import "./SocialMediaIcons.css"


// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = "button"

    let type = ['fb', 'ig', 'p']
    if (type.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    return <button className={classList}></button>

}

export default Button;

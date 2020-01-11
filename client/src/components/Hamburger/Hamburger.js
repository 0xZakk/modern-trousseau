import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Hamburger.css';

library.add(faBars, faTimes)


const Hamburger = (props) => {
    const {icons, setIcons} = useState("bars");
    console.log(icons)
    const switchIcon = () => {
        setIcons("times");
    }
    return <a className="hamburger-menu" onClick={props.onClick} >
            <FontAwesomeIcon
            onClick={switchIcon}
            className="HamburgerIcon"
            icon={icons}/>
            </a>
}


export default Hamburger;
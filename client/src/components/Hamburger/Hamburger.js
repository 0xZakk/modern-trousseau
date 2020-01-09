import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Hamburger.css';

library.add(faBars, faTimes)

const Hamburger = (props) => {
    let classList = "hamburger";
    
    let iconList = `${props.icon}`;
    
    let types = ['Bars', 'Times'];
    if (types.includes(props.type)) {
        classList += ` hamburger-${props.type}`
    }
    return (
    <button className="hamburger-menu" onClick={props.onClick}>
        <FontAwesomeIcon icon={iconList} className={classList}/>
    </button>
    )
};

export default Hamburger;
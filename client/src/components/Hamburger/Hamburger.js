import React from 'react'
import './Hamburger.css'


const Menu = (props) => <button className="hamburger-menu" onClick={props.onClick}>
        <div className="hamburger-divs"></div>
        <div className="hamburger-divs"></div>
        <div className="hamburger-divs"></div>
    </button>

export default Menu
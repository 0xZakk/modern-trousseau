import React from 'react'
import './Menu.css'


const Menu = (props) => <button className="hamburger" onClick={props.onClick}>
    {props.children}
    </button>

export default Menu
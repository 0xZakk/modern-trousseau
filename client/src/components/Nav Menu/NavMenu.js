import React, { Component } from 'react';
import './NavMenu.css'

class NavMenu extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Gowns</li>
                    <li>Visit</li>
                    <li>Book</li>
                    <li>About</li>
                </ul>
            </nav>
        )
    }
};



export default NavMenu;
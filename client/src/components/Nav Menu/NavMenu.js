import React, { Component } from 'react';
import './NavMenu.css'

class NavMenu extends Component {

    render() {
        return (
            <div className="nav-container">
                <nav>
                    <ul>
                        <li><h3>Home</h3>Home</li>
                        <li>Gowns</li>
                        <li>Visit</li>
                        <li>Book</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
        )
    }
};



export default NavMenu;
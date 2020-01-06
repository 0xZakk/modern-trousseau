import React, { Component } from 'react';
import './NavMenu.css'

class NavMenu extends Component {

    render() {
        return (
            <div className="nav-container">
                <nav>
                    <ul>
                        <li><h3>Home</h3></li>
                        <li><h3>Gowns</h3></li>
                        <li><h3>Visit</h3></li>
                        <li><h3>Book</h3></li>
                        <li><h3>About</h3></li>
                    </ul>
                </nav>
            </div>
        )
    }
};



export default NavMenu;
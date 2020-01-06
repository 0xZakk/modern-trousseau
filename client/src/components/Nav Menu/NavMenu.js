import React, { Component } from 'react';
import './NavMenu.css'

class NavMenu extends Component {

    render() {
        return (
            <div className="nav-container">
                <nav>
                    <ul>
                        <li><h3>Home</h3><span className="dots">&#9679;</span></li>
                        <li><h3>Our Gowns</h3><span className="dots">&#9679;</span></li>
                        <li><h3>Visit Us</h3><span className="dots">&#9679;</span></li>
                        <li><h3>Book</h3><span className="dots">&#9679;</span></li>
                        <li><h3>About Us</h3></li>
                    </ul>
                </nav>
            </div>
        )
    }
};



export default NavMenu;
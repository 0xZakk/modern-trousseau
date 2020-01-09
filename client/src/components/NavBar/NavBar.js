import React from 'react';
import Icons from '../Icons/FAIcon';
import './NavBar.css';
import logo from './Logo/Logo.png';

const NavBar = () => (
    <div>
        <nav className='navBar'>
            <div>
                <Icons name={['fas', 'bars']}/>
            </div>
            <div>
                <img src ={logo} height='10' width ='100' alt = 'Modern trousseau logo' />
            </div>
            <div>
                <Icons name={['fas', 'search']}/>
            </div>
        </nav>
    </div>
)

export default NavBar
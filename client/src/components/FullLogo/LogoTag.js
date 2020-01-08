import React, { Fragment } from 'react'
import './Logo.css'
import Logo from './Logo'
import TagLine from './TagLine'


const LogoTag = () => {
    return (
        <div className="logo-tag">
            <Logo/>
            <TagLine/>
        </div>
    );
};

export default LogoTag;
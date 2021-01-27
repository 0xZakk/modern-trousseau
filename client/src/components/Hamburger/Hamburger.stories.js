import React, { useState } from 'react';
import { storiesOf } from '@storybook/react'; 
import Hamburger from './Hamburger';

let open = false;
let icons = ""

const iconType = () => {
    const {icons, setIcons} = useState("bars")
}

const switchIcon = () => {
    if (open === true && icons === "bars"){
        setIcons("times")
    }else {
        setIcons("bars")
    }
}


storiesOf('Hamburger', module)
    .add('Hamburger', () => 
    <Hamburger 
    icon={icons}
    open={open} 
    onClick={switchIcon}/>)


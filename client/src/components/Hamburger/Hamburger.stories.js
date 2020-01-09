import React from 'react';
import { storiesOf } from '@storybook/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hamburger from './Hamburger';

let typeName = "Bars";
let iconName = "bars"

function handleClick() {
    // documentElement.classList.add(".times")
}

storiesOf('Hamburger', module)
    .add('Hamburger', () => 
    <Hamburger type={typeName} icon={iconName} onClick={handleClick}>
    </Hamburger>)
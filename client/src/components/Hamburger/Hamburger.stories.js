import React from 'react';
import { storiesOf } from '@storybook/react';

import Hamburger from './Hamburger';

function handleClick(e) {
    e.preventDefault();
    alert("Open me baby!")
}

storiesOf('Hamburger', module)
    .add('Hamburger', () => 
    <Hamburger label="hamburger" type="menu" onClick={handleClick}></Hamburger>)
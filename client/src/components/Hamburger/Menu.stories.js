import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from './Menu';

function handleClick(e) {
    e.preventDefault();
    alert("Open me baby!")
}

storiesOf('Menu', module)
    .add('Menu', () => <Menu label="Hamburger" type="hammy" onClick={handleClick}>
        <div className="burgers"></div>
        <div className="burgers"></div>
        <div className="burgers"></div>
    </Menu>)
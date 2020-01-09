import React from 'react';
import { storiesOf } from '@storybook/react';
import './Button.css'
import Button from './Button';

function handleClick(e) {
    e.preventDefault();
    alert("Dress Details")
}


storiesOf('Button', module)
    .add('Primary', () => <Button label="This is a Button" type="primary"/>)
    .add('Details', () => <Button label="+" type="details" onClick={handleClick} />)
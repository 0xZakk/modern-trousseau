import React from 'react';
import { storiesOf } from '@storybook/react'
import Button from './Button'
import './Button.css'

storiesOf('Button', module)
    .add('light pink button', () => <Button label='Book Now' type='light-pink' /> )
    .add('dark pink button', () => <Button label='DONE' type='dark-pink' /> )
    .add('small grey button', () => <Button label='Next' type='small-grey' /> )
    .add('large red button', () => <Button label='Browse Dresses' type='large-red' large /> )
    

import React from 'react';
import { storiesOf } from '@storybook/react'
import Button from './Button'
import './Button.css'

storiesOf('Button', module)
    .add('light pink button', () => <Button label='light-pink' type='light-pink' /> )

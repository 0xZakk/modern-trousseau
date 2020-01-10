import React from 'react';
import { storiesOf } from '@storybook/react';
import FlagshipMenu from './Flagship';


storiesOf('Flagship Menu', module)
    .add('Primary', () => (<Menu city='Baltimore, MD'
    							 image=''
    							 address='1429 Aliceanna Street Baltimore, MD 21231' 
    							 phone='(443) 447-8929' 
    							 email='baltimore@moderntrousseau.com' 
    							 instagram='@moderntrousseaubaltimore'
    						/>))
import React from 'react';
import { storiesOf } from '@storybook/react';
import FlagshipMenu from './FlagshipMenu';


storiesOf('Flagship Menu', module)
    .add('Primary', () => (<FlagshipMenu city='Baltimore, MD'
    							 image=''
    							 address='1429 Aliceanna Street Baltimore, MD 21231' 
    							 phone='(443) 447-8929' 
    							 email='baltimore@moderntrousseau.com' 
    							 instagram='@moderntrousseaubaltimore'
    						/>))
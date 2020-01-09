import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Flagship';


storiesOf('Flagship Menu', module)
    .add('Primary', () => (<Menu city='Baltimore, MD'
    							 image=''
    							 address='1429 Aliceanna Street Baltimore, MD 21231' 
    							 phone='(443) 447-8929' 
    							 email='baltimore@moderntrousseau.com' 
    							 instagram='Need more inspo? Follow us at @moderntrousseaubaltimore'

    							 back-arrow={['fas', 'arrow-left']}
    							 location-icon={['fas', 'map-marker-alt']}
    							 phone-icon={['fas', 'phone-alt']}
    							 email-icon={['far', 'envelope']}
    							 instagram-icon={['fab', 'instagram']}
    						/>))
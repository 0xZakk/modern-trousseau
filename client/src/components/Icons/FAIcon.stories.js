import React from 'react';
import { storiesOf } from '@storybook/react';


import FontIcon from './FAIcon'

storiesOf('FontIcon', module)
    .add('PininterestIcon', () => <FontIcon name={['fab', 'pinterest']}/>)
    .add('FacebookIcon', () => <FontIcon name={['fab', 'facebook']}/>)
    .add('InstagramIcon', () => <FontIcon name={['fab', 'instagram']}/>)
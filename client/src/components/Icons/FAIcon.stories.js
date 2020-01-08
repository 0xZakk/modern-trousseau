import React from 'react';
import { storiesOf } from '@storybook/react';


import Icons from './FAIcon'

storiesOf('Icons', module)
    .add('Left-Arrow', () => <Icons name={['fas', 'arrow-left']}/>)
    .add('Chevron-Left', () => <Icons name={['fas', 'chevron-left']}/>)
    .add('Chevron-Right', () => <Icons name={['fas', 'chevron-right']}/>)
    .add('Sort', () => <Icons name={['fas', 'sort']}/>)
    .add('Hand', () => <Icons name={['far', 'hand-pointer']}/>)
    .add('Menu', () => <Icons name={['fas', 'bars']}/>)
    .add('User', () => <Icons name={['far', 'user']}/>)
    .add('Pinterest', () => <Icons name={['fab', 'pinterest']}/>)
    .add('Facebook', () => <Icons name={['fab', 'facebook']}/>)
    .add('Instagram', () => <Icons name={['fab', 'instagram']}/>)
    .add('Square', () => <Icons name={['far', 'square']}/>)
    .add('Check-Square', () => <Icons name={['far', 'check-square']}/>)
    .add('Plus-Square', () => <Icons name={['far', 'plus-square']}/>)
    .add('Calendar', () => <Icons name={['fas', 'calendar-day']}/>)
    .add('Heart', () => <Icons name={['far', 'heart']}/>)
    .add('Search', () => <Icons name={['fas', 'search']}/>)
    .add('Phone', () => <Icons name={['fas', 'phone-alt']}/>)
    .add('Email', () => <Icons name={['far', 'envelope']}/>)
    .add('Time', () => <Icons name={['far', 'clock']}/>)
    .add('Location', () => <Icons name={['fas', 'map-marker-alt']}/>)
    .add('Minus', () => <Icons name={['fas', 'minus']}/>)
    .add('Plus', () => <Icons name={['fas', 'plus']}/>)
    .add('Times', () => <Icons name={['fas', 'times']}/>)
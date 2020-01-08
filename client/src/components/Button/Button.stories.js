import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button label='Primary'/>)
    .add('Warning', () => <Button classList='button-warning' label='Warning'/>)
    .add('Caution', () => <Button  classList='button-caution' label='Caution'/>)

import React from 'react';
import { storiesOf } from '@storybook/react';
import Designer from './Designer'

  
storiesOf('Designer', module)
    .add('Primary', () => <Designer>This is a Button</Designer>)

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

function handleClick(e) {
  e.preventDefault();
  alert("You clicked the button");
  //Component called here for searchbar in render
}

storiesOf('Button', module)
    .add('Primary', () => <Button onClick={handleClick} />)

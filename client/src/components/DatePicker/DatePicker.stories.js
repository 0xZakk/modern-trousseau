import React from 'react';
import { storiesOf } from '@storybook/react';

import DatePicker from './DatePicker';

function handleClick(e) {
  e.preventDefault();
  alert("You clicked the button");
  //Component called here for searchbar in render
}

storiesOf('DatePicker', module)
    .add('DatePicker', () => <DatePicker label={"Requested Date*"} />)

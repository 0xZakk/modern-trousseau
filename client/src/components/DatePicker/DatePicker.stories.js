import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DatePicker from './DatePicker';

function handleChange(event) {
  console.log(event.target.value);
}

storiesOf('DatePicker', module)

    .add('DatePicker', () => <DatePicker label={"Requested Date*"} name={"Requested Date"} value={"November 12"} min={"February 29, 2020"} step={"1"} max={"February 28, 2022"} onChange={handleChange}/>)

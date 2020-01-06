import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from './Text';

storiesOf('Text', module)
    .add('TextArea', () => <div><p className="title">Is there anything else you want us to know?</p><div className="box"><p>Tell us about your dream dress! Do you have any Modern Trousseau favorites?</p></div></div>)

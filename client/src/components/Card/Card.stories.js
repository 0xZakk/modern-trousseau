import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Card', module)
	.add('Card', () => (<Card type='card' />))
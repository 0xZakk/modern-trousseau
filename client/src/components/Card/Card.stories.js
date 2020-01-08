import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';


storiesOf('Cards', module)
	.add('HeartCard', () => (<Card type='card' icon='' title='' paraText='' />))
	.add('CalCard', () => (<Card type='card' icon='' title='' paraText='' />))
	.add('DressCard', () => (<Card type='card' icon='' title='' paraText='' />))
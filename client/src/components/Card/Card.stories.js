import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Card', module)
	.add('Top', () => (<Card label='' type='top' />))
	// .add('Middle', () => (<Card label='' type='middle' />))
	// .add('Bottom', () => (<Card label='' type='bottom' />))
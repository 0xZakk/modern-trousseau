import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from './Logo';
import LogoTag from './LogoTag'

storiesOf('Logo', module)
    .add('Logo', () => <Logo />)
    .add('LogoTag', () => <LogoTag />)

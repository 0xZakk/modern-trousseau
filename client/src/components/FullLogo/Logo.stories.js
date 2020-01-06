import React from 'react';
import { storiesOf } from '@storybook/react';

import Logo from './Logo';
import TagLine from './TagLine'
import LogoTag from './LogoTag'

storiesOf('Logo', module)
    .add('Logo', () => <Logo />)
    .add('TagLine', () => <TagLine />)
    .add('LogoTag', () => <LogoTag />)

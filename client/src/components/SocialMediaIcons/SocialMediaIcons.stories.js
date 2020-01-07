import React from 'react';
import { storiesOf } from '@storybook/react';

import SocialMediaIcons from './SocialMediaIcons';



storiesOf('SocialMediaIcons', module)
    .add('FbButton', () => <SocialMediaIcons type="fb" />)
    .add('IgButton', () => <SocialMediaIcons type="ig" />)
    .add('PButton', () => <SocialMediaIcons type="p" />)


import React from 'react';
import { storiesOf } from '@storybook/react';
import SVGIcon from './SVGIcon';
import './Icon.css'
storiesOf('SVGIcon', module)
    .add('Ig', () =>
        <SVGIcon className='icon' name='instagram' />
    )
    .add('Fb', () =>
        <SVGIcon className='icon' name='facebook' />
    )

    .add('pinterest', () =>
        <SVGIcon className='icon' name='pinterest' />
    )

















// import React from 'react';
// import { storiesOf } from '@storybook/react';

// import SocialMediaIcons from './SocialMediaIcons';



// storiesOf('SocialMediaIcons', module)
//     .add('FbButton', () => <SocialMediaIcons type="fb" />)
//     .add('IgButton', () => <SocialMediaIcons type="ig" />)
//     .add('PButton', () => <SocialMediaIcons type="p" />)


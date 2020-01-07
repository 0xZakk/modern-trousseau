import React from 'react';
import { storiesOf } from '@storybook/react';
import SVGIcon from './SVGIcon';
import './Icon.css'
storiesOf('SVGIcon', module)
    .add('Logo', () =>
        <div className='theIcon'>
            <div className='logoNav'>
                <SVGIcon className='icon' name='instagram' />
            </div>

        </div>
    )

















// import React from 'react';
// import { storiesOf } from '@storybook/react';

// import SocialMediaIcons from './SocialMediaIcons';



// storiesOf('SocialMediaIcons', module)
//     .add('FbButton', () => <SocialMediaIcons type="fb" />)
//     .add('IgButton', () => <SocialMediaIcons type="ig" />)
//     .add('PButton', () => <SocialMediaIcons type="p" />)


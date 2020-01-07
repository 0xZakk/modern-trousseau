import React from 'react';
import { storiesOf } from '@storybook/react';

import SVGIcon from './SVGIcon';
import './SVGIcon.css'


storiesOf('SVGIcon', module)
    .add('Logo', () => 
    <div className='icon-container'>
        <div className='logoNav'>
            <SVGIcon className='icon' name='location'/>
            <SVGIcon className ='icon' name='email' />
            <SVGIcon className ='icon' name='phone'/>
            <SVGIcon className ='icon' name='instagram'/>
        </div>
        <div className='logoNav'>
            <SVGIcon className ='icon' name='calendar' fill = 'black'/>
            <SVGIcon className ='icon' name='location' fill = 'black'/>
            <SVGIcon className ='icon' name='time' fill = 'black'/>
        </div>
    </div>
    )

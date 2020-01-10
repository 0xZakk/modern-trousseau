import React from 'react';
import Icons from '../Icons/FAIcon';
import './StayConnected.css'

const StayConnected = (props) => (
    <div className='stay-connected-flex'>
        <p>Stay Connected</p>
        <div className='stay-connected-icons'>
            <Icons name={['fab', 'facebook']}/>
            <Icons name={['fab', 'instagram']}/>
            <Icons name={['fab', 'pinterest']}/>
        </div>
    </div>
)

export default StayConnected;
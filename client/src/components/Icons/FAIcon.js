import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fab)

const FontIcon = (props) => (
    <div>
        <FontAwesomeIcon icon = {props.name}/>
    </div>
)

export default FontIcon;
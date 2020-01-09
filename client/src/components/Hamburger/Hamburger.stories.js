import React from 'react';
import { storiesOf } from '@storybook/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Hamburger from './Hamburger';

// let typeName = "Bars";
// let iconName = "bars"

// function toggle(e) {
//     e.preventDefault()
//     if (iconName === "bars") {
//         iconName = "times"
//     } else {

//     }
// }

// function toggle(e) {
//     e.preventDefault();
//     if (iconName === "bars"){
//         iconName = "times"
//         typeName = "Times"
//         alert(iconName + typeName);
//     }else{
//         iconName = "bars"
//         typeName = "Bars"
//         alert(typeName);
//     }
    
    
// }


storiesOf('Hamburger', module)
    .add('Hamburger', () => 
    <Hamburger type="icon" icon="bars">
    </Hamburger>)
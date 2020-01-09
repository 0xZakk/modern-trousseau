import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Hamburger.css';

library.add(faBars, faTimes)

// class Hamburger extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             open: false,
//             iconList: "bars",
//             typeName: "hamburgerBars"
//         }
//         this.openMenu = this.openMenu.bind(this)
//     }
//     openMenu() {
//         this.setState({
//         ...this.state,
//         iconList: "times",
//         typeName: "hamburgerTimes"})
//         console.log(this.state.iconList + " " + this.state.class);
//         }
    
//     render() {
//     return (
//     <a className="hamburger-menu" onClick={this.openMenu} >
//         <FontAwesomeIcon
//         icon={this.state.iconList} 
//         className={this.state.typeName} 
//         />
//     </a>
//     )
//     }
// };


const Hamburger = (props) => 

    <a className="hamburger-menu" onClick={props.onClick} >
        <FontAwesomeIcon
        icon={props.icon} 
        className={props.className} 
        />
    </a>


export default Hamburger;
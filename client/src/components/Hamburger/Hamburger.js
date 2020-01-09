import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Hamburger.css';

library.add(faBars, faTimes)

class Hamburger extends Component {
    constructor(props) {
        super()
        this.state = {
            open: false,
            iconList: "bars",
            typeName: "Bars"
        }
        this.openMenu = this.openMenu.bind(this)
    }
    // let iconList = "bars"
    // let classList = "";
    // let classList = "hamburger";
    
    // let iconList = `${props.icon}`;
    
    // let types = "icon";
    // let types = "icon";
    // if (types.includes(props.type)) {
    //     classList += ` hamburger-${props.type}`
    // }
    openMenu() {
        this.setState({
        ...this.state,
        iconList: "times",
        open: !this.state.open})
        console.log(this.state.iconList + " " + this.state.classList);
        }
    render() {
    return (
    <button className="hamburger-menu" onClick={this.openMenu}>
        <FontAwesomeIcon
        open={this.state.open}
        icon={this.state.iconList} 
        className="hamburger-icon" 
        />
    </button>
    )
    }
};

export default Hamburger;
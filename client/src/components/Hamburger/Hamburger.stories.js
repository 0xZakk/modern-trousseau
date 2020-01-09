import React, { useState } from 'react';
import { storiesOf } from '@storybook/react'; 
import Hamburger from './Hamburger';

let burger = "hamburgerBars";
let icons = "bars";

function switchMenu() {
    // const [burger, setBurger] = useState("hamburgerTimes");
    const [icons, setIcons] = useState("times");
}

function switchBack() {
    // const [burger, setBurger] = useState("hamburgerBars");
    const [icons, setIcons] = useState("bars");
}

function handleClick() {
    console.log(burger)
    if(burger == "hambugerBars" && icons == "bars"){
    return(switchMenu)
    }
    else{
    return(switchBack)
    
    }
    
}

storiesOf('Hamburger', module)
    .add('Hamburger', () => 
    <Hamburger className={burger} icon={icons} onClick={handleClick}></Hamburger>)


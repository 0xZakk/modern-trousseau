import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

function myFunction (){
    alert("details about dress");
}  

storiesOf('Button', module)
    .add('Primary', () => <Button>This is a Button</Button>)
    .add('Details', () => <Button className="info"onclick={myFunction()}>+</Button>)


  
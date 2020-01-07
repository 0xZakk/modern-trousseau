import React from 'react'
import './DatePicker.css'
import imageFile from '../../images/Search Icon_outlined.svg'

function handleClick(e) {
  e.preventDefault();
  alert("You clicked the button");
}

const DatePicker = (props) => 
<>
<label for='requestedDate'>Requested Date*</label>
<input type="date" id="requestedDate" name='Requested Date' value="" min="February 2"/>
</>

export default DatePicker

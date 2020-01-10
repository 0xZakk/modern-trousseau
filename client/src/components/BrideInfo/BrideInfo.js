import React from "react";
import DatePicker from '../DatePicker/DatePicker'
import TextInput from '../TextInputComponent/TextInput'

const BrideInfo = (props) =>

<div>
   <TextInput
      label={"Full Name*"}
      type={"text"}
      placeholder={""}
      onChange={props.handleClick}
      />
   <TextInput
      label={"Phone Number*"}
      type={"number"}
      placeholder={""}
      onChange={props.handleClick}
      />
    <TextInput
      label={"Email*"}
      type={"email"}
      placeholder={""}
      onChange={props.handleClick}
      />
<DatePicker label={"Requested Date*"} name={"Requested Date"} value={"November 11"} min={"February 29, 2020"} step={"1"} max={"February 28, 2022"} onChange={props.handleChange}/>
</div>

export default BrideInfo

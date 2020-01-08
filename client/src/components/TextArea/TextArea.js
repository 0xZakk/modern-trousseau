import React from 'react'
import './TextArea.css'


const TextArea = (props) => <div>
<label className={props.pClassList}>Is there anything else you want us to know?</label>
<textarea className={props.textAreaClassList}>
Tell us about your dream dress! Do you have any Modern Trousseau favorites?
</textarea></div> 


export default TextArea

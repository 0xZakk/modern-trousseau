import React from "react";
import "./SignupCard.css";
import TextInput from '../TextInputComponent/TextInput'

const SignupCard = props => (
  <div className="signup">
    <div className="container">
      <TextInput/>Obsessed with a dress?<button className="small-pink">Submit</button>
    </div>
  </div>
);

export default SignupCard;

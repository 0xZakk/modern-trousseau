import React from "react";
import "./SignupCard.css";
import TextInput from "../TextInputComponent/TextInput";
import Button from '../Button/Button'

function handleChange(event) {
  console.log(event.target.value);
}

const SignupCard = props => (
  <div className="container">
    <div className="text main-text">Obsessed with a dress?</div>
    <div className="signup">
      {" "}
      <TextInput
        type={"text"}
        placeholder={"Sign up here"}
        onChange={handleChange}
      />
      <Button label="SUBMIT" type="light-pink" />
    </div>
  </div>
);

export default SignupCard;

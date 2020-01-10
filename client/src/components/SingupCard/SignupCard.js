import React from "react";
import "./SignupCard.css";
import TextInput from "../TextInputComponent/TextInput";

function handleChange(event) {
  console.log(event.target.value);
}

const SignupCard = props => (
  <div className="container">
    <div className="text">Obsessed with a dress?
    <div className="signup">
      {" "}
      <TextInput
        type={"text"}
        placeholder={"Sign up here"}
        onChange={handleChange}
      />
      </div>
    </div>
  </div>
);

export default SignupCard;

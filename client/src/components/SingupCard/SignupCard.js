import React from "react";
import "./SignupCard.css";
<<<<<<< HEAD
import TextInput from "../TextInputComponent/TextInput";

function handleChange(event) {
  console.log(event.target.value);
}

const SignupCard = props => (
  <div className="container">
    <div className="text">Obsessed with a dress?</div>
    <div className="signup">
      {" "}
      <TextInput
        type={"text"}
        placeholder={"Sign up here"}
        onChange={handleChange}
      />
      <button>dgdsfsdf</button>
      </div>
    
=======

const SignupCard = props => (
  <div className='signup'>
    Obsessed with a dress?
>>>>>>> 42b88aaa2517410b513801b1843a6552ed75885b
  </div>
);

export default SignupCard;

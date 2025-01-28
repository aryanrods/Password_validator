import "./App.css";
import React from "react";
import { useState } from "react";
import validator from "validator";

export default function App() {
  const [message, setMessage] = useState("");

  const passvalidator = (password) => {
    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setMessage("Password is strong");
    } else if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setMessage("Password is okay");
    } else {
      setMessage("Password is weak");
    }
  };

  return (
    <>
      <h1>Password Validate</h1>
      <input
        type="text"
        onChange={(e) => passvalidator(e.target.value)}
        className=""
      />
      <p>{message}</p>
    </>
  );
}

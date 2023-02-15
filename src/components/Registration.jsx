import React, { useState } from "react";
import { register } from "../firebase-auth";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [finished, setFinished] = useState(false);

 async function handleRegistrationClicked(event) {
   await register(email, password)
   setFinished(true)
  }

  return (
    <>
    {!finished ?
   ( <div className='registration'>
      <p>Please add your data to login</p>
      <input
        style={{ margin: 10 }}
        type='email'
        placeholder='type your email address'
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type='password'
        placeholder='add your password'
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleRegistrationClicked} style={{ margin: 10 }}>
        Registration
      </button>
    </div>) : (<p>Successfully registered</p>)}
    </>
  );
}

export default Registration;

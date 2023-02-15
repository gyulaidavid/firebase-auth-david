import React, { useState } from "react";
import { login } from "../firebase-auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  function handleLoginButtonClick(event) {
    event.preventDefault();
    login(email, password).then((athUser) => setUser(athUser));
  }

  return (
    <div className="login">
        <p>Login</p>
      {" "}
      {user === null ? (
        <form>
          <input
            placeholder='email'
            type='email'
            name='email'
            style={{ margin: 10 }}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder='password'
            type='password'
            name='password'
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={handleLoginButtonClick} style={{ margin: 10 }}>
            Login!
          </button>
        </form>
      ) : (
        <p>Successfully logged in: {user.uid}</p>
      )}
    </div>
  );
}

export default Login;

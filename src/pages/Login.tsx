import React, { useState } from "react";
import Google from "../assets/images/google.svg";
import Apple from "../assets/images/apple.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-parent">
      <div className="left">Board.</div>
      <div className="right">
        <div className="right-items">
          <div className="head">Sign In</div>
          <div className="sub-head">Sign in to your account</div>
          <div className="s-buttons">
            <div>
              {" "}
              <img className="logo" src={Google}></img>Sign in with Google
            </div>
            <div>
              {" "}
              <img className="logo" src={Apple}></img> Sign in with Apple
            </div>
          </div>
          <div className="creds">
            <div className="fields">
              <div className="sub-head">Email address</div>
              <input
                onChange={(ev) => {
                  setEmail(ev.currentTarget.value);
                }}
                value={email}
              ></input>
            </div>
            <div className="fields">
              <div className="sub-head">Password</div>
              <input
                type="password"
                onChange={(ev) => {
                  setPassword(ev.currentTarget.value);
                }}
                value={password}
              ></input>
            </div>
            <div className="blue-text">Forgot password?</div>
            <div className="submit">Sign In</div>
          </div>
          <div className="register">
            Don’t have an account?{" "}
            <span className="blue-text">Register here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

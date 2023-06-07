import React, { useState } from "react";
import Google from "../assets/images/google.svg";
import Apple from "../assets/images/apple.svg";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      navigate('/home')

      try {
        const data = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <div className="login-parent">
      <div className="left">Board.</div>
      <div className="right">
        <div className="right-items">
          <div className="head">Sign In</div>
          <div className="sub-head">Sign in to your account</div>
          <div className="s-buttons">
            {/* <GoogleLogin
              onSuccess={(credentialResponse: any) => {
                // console.log(jwt_decode(credentialResponse.credential));

                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            /> */}
            <div onClick={() => login()}>
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

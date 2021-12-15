import React, { Fragment, useRef, useState, useEffect } from "react";
import { useAlert } from 'react-alert';
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import Loader from '../layouts/Loader/Loader';
import "./Login.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

    const dispatch = useDispatch();
    const alert = useAlert();



  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

 const loginSubmit = ()  =>{
     console.log("From Submited");
 }

  const switchTabs = (e, tab) => {
    if (tab === "login") {
        switcherTab.current.classList.add("shiftToNeutral");
        switcherTab.current.classList.remove("shiftToRight");

        registerTab.current.classList.remove("shiftToNeutralForm");
        loginTab.current.classList.remove("shiftToLeft");
      }
      if (tab === "register") {
        switcherTab.current.classList.add("shiftToRight");
        switcherTab.current.classList.remove("shiftToNeutral");

        registerTab.current.classList.add("shiftToNeutralForm");
        loginTab.current.classList.add("shiftToLeft");
      }
  };

    return (

          <Fragment>
            <div className="LoginSignUpContainer">
              <div className="LoginSignUpBox">
              <div>
                <div className="login_signUp_toggle">
                  <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                  <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                </div>
                <button ref={switcherTab}></button>
              </div>
              <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <Link to="/password/forgot">Forget Password ?</Link>
                <input type="submit" value="Login" className="loginBtn" />
              </form>
              <form
                className="signUpForm"
                ref={registerTab}
                encType="multipart/form-data"
              >
                  <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                  />
                </div>
                  <div className="signUpEmail">
                    <MailOutlineIcon />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                    />
                  </div>
                  <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                  />
                </div>
                <div id="registerImage">
                  <img src="{avatarPreview} "alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                  />
                </div>
                  <input type="submit" value="Register" className="signUpBtn" />
                </form>
              </div>
            </div>
          </Fragment>
    )
}

export default Login

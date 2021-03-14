import React, { useRef } from "react";
import "./SignUp.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function SignUp() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signup">
      <Link to="/">
        <img
          className="signup_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="signup_container">
        <h1>Create Account</h1>
        <form>
          <h5>Your name</h5>
          <input type="text" ref={nameRef} />
          <h5>Email</h5>
          <input type="text" ref={emailRef} />
          <h5>Password</h5>
          <input type="Password" ref={passwordRef} />
        </form>

        <button className="signup_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default SignUp;

import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./AuthScreen.css";

function AuthScreen() {
  const [showSignUp, setShowSignUp] = useState(false);

  const SignInemailRef = useRef(null);
  const SignInpasswordRef = useRef(null);
  const SignUpemailRef = useRef(null);
  const SignUppasswordRef = useRef(null);

  const history = useHistory();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        SignUpemailRef.current.value,
        SignUppasswordRef.current.value
      )
      .then((authUser) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });

    SignUpemailRef.current.value = "";
    SignUppasswordRef.current.value = "";
    setShowSignUp(false);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        SignInemailRef.current.value,
        SignInpasswordRef.current.value
      )
      .then((authUser) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="signInScreen">
      {showSignUp ? (
        <form>
          <h1>Register</h1>
          <input ref={SignUpemailRef} placeholder="Email" type="email" />
          <input
            ref={SignUppasswordRef}
            placeholder="Password"
            type="password"
          />
          <button type="submit" onClick={register}>
            Submit
          </button>
          <h4>
            <span
              className="signInScreen__link"
              onClick={() => setShowSignUp(false)}
            >
              Already have Account.
            </span>
          </h4>
        </form>
      ) : (
        <form>
          <h1>Sign In</h1>
          <input ref={SignInemailRef} placeholder="Email" type="email" />
          <input
            ref={SignInpasswordRef}
            placeholder="Password"
            type="password"
          />
          <button type="submit" onClick={signIn}>
            Sign In
          </button>
          <h4>
            <span className="signInScreen__gray">New to Netflix?</span>{" "}
            <span
              className="signInScreen__link"
              onClick={() => setShowSignUp(true)}
            >
              Sign Up Now.
            </span>
          </h4>
        </form>
      )}
    </div>
  );
}

export default AuthScreen;

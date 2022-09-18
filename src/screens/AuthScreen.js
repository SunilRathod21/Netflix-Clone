import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../Components/loader/Loader";
import { auth } from "../firebase";
import "./AuthScreen.css";

function AuthScreen() {
	const [showSignUp, setShowSignUp] = useState(false);

	const SignInemailRef = useRef(null);
	const SignInpasswordRef = useRef(null);
	const SignUpemailRef = useRef(null);
	const SignUppasswordRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [loginError, setLoginError] = useState("");
	const [registerError, setRegisterError] = useState("");
	const history = useHistory();

	const register = async (e) => {
		try {
			setLoading(true);
			e.preventDefault();
			const resp = await auth.createUserWithEmailAndPassword(
				SignUpemailRef.current.value,
				SignUppasswordRef.current.value
			);
			if (resp) {
				history.push("/");
				SignUpemailRef.current.value = "";
				SignUppasswordRef.current.value = "";
				// setShowSignUp(false);
			}
		} catch (err) {
			setRegisterError(err.message);
		} finally {
			setLoading(false);
		}
	};

	const signIn = async (e) => {
		try {
			setLoading(true);

			e.preventDefault();
			const authUser = await auth.signInWithEmailAndPassword(
				SignInemailRef.current.value,
				SignInpasswordRef.current.value
			);

			if (authUser) {
				history.push("/");
			}
		} catch (err) {
			setLoginError(err.message);
			console.log(err);
		} finally {
			setLoading(false);
		}
	};
	return loading ? (
		<Loader />
	) : (
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
					<span className="error">{registerError}</span>
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

					<span className="error">{loginError}</span>
				</form>
			)}
		</div>
	);
}

export default AuthScreen;

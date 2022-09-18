import React, { useEffect, memo, useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StartScreen from "./screens/StartScreen";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";
import VideoPlayer from "./screens/VideoPlayer";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchUser = () => {
			try {
				setLoading(true);
				console.time();
				const unsubscribe = auth.onAuthStateChanged((userAuth) => {
					if (userAuth) {
						//logged in
						dispatch(
							login({
								uid: userAuth.uid,
								email: userAuth.email,
							})
						);
					} else {
						//Logged out
						dispatch(logout());
					}
				});
				return unsubscribe;
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
				console.timeEnd();
			}
		};
		fetchUser();
	}, [dispatch]);

	return (
		<div className="app">
			{loading ? (
				<div
					style={{
						position: "fixed",
						height: "100vh",
						width: "100vw",
						background: "red",
						zIndex: 1000,
					}}
				>
					loading
				</div>
			) : (
				<Router>
					{!user ? (
						<StartScreen />
					) : (
						<Switch>
							<Route path="/" exact>
								<HomeScreen />
							</Route>
							<Route path="/videoPlayer" exact>
								<VideoPlayer />
							</Route>
							<Route path="/profile" exact>
								<ProfileScreen />
							</Route>
						</Switch>
					)}
				</Router>
			)}
		</div>
	);
}

export default memo(App);

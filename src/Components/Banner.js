import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../Requests";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setVideo } from "../features/videoSlice";
function Banner() {
	const [movie, setMovie] = useState([]);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		};
		fetchData();
	}, []);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
	return (
		<header
			className="banner"
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgourndSize: "cover",
			}}
		>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button
						className="banner__button"
						onClick={async () => {
							await dispatch(setVideo(movie));
							history.push("/videoPlayer");
						}}
					>
						Play
					</button>
					<button className="banner__button">My List</button>
				</div>
				<p className="banner__description">{truncate(movie?.overview, 150)}</p>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;

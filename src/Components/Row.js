import React, { useEffect, useState, memo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "../axios";
import { setVideo } from "../features/videoSlice";
import Loader from "./loader/Loader";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const history = useHistory();

	const base_url = "https://image.tmdb.org/t/p/original/";
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const request = await axios.get(fetchUrl);

				setMovies(request.data.results);
				// return request;
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [fetchUrl]);

	return loading ? (
		<Loader />
	) : (
		<div className="row">
			<h2 className="row__title">{title}</h2>
			<div className="row__posters">
				{movies.map(
					(movie) =>
						((isLargeRow && movie.poster_path) ||
							(!isLargeRow && movie.backdrop_path)) && (
							<img
								onClick={async () => {
									await dispatch(setVideo(movie));
									history.push("/videoPlayer");
								}}
								className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								key={movie.id}
								src={`${base_url}${
									isLargeRow ? movie.poster_path : movie.backdrop_path
								}`}
								alt={movie.name}
							/>
						)
				)}
			</div>
		</div>
	);
}

export default memo(Row);

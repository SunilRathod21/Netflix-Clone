import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectVideo } from "../features/videoSlice";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import AddIcon from "@material-ui/icons/Add";
import ShareIcon from "@material-ui/icons/Share";
import Nav from "../Components/Nav";
import "./VideoPlayer.css";
import Footer from "../Components/Footer";
import Loader from "../Components/loader/Loader";
function VideoPlayer() {
	const [trailerUrl, setTrailerUrl] = useState("");
	const movie = useSelector(selectVideo);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		// if (trailerUrl) {
		//   setTrailerUrl("");
		// } else {
		(async () => {
			try {
				setLoading(true);
				console.time();
				const url = await movieTrailer(movie?.name || "");
				console.timeEnd();
				const urlParams = new URLSearchParams(new URL(url).search);
				setTrailerUrl(urlParams.get("v"));
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		})();
		// }
	}, [movie]);

	const opts = {
		height: "500px",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className="videoPlayer">
					<Nav />
					{trailerUrl ? <YouTube videoId={trailerUrl} opts={opts} /> : ""}
					<div className="videoPlayer__info">
						<h1>{movie?.title || movie?.name || movie?.original_name}</h1>
						<p>{movie?.overview}</p>
						<div className="videoPlayer__icons">
							<div>
								<AddIcon />
								<p>Watchlist</p>
							</div>
							<div>
								<ShareIcon />
								<p>Share</p>
							</div>
						</div>
					</div>
				</div>
			)}
			<Footer />
		</>
	);
}

export default VideoPlayer;

import React from "react";
import { HashLoader } from "react-spinners";
import "./Loader.css";
function Loader() {
	return (
		<div className="loader">
			<HashLoader color="#FF3131" />
		</div>
	);
}

export default Loader;

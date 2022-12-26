import React from "react";
import "../notfound/NotFound.scss";

const NotFound = () => {
	return (
		<div className="notfound">
			<img
				src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
				alt="Detective 404 Animation example"
				loading="lazy"
				className="notfound__img"
			></img>
			<h1 className="notfound__title">Error 404: Page not found. </h1>
			<form action="/Dressnote">
				<button className="notfound__btn">Back to Home page</button>
			</form>
		</div>
	);
};

export default NotFound;

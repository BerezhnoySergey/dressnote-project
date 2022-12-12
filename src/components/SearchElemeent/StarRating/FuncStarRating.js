import React, { useState } from "react";
import "./FuncStarRating.scss";
import Stars from "./Star";

const FuncStarRating = ({ rate = 2 }) => {
	const [rating, setRating] = useState(rate);
	const [hover, setHover] = useState();

	function onMouseLeave() {
		setHover(null);
	}

	return (
		<div className="star__container">
			{[1, 2, 3, 4, 5].map((item) => {
				const ratingValue = item;
				function onMouseEnter() {
					setHover(ratingValue);
				}

				return (
					<Stars
						ratingValue={ratingValue}
						setRating={setRating}
						hover={hover}
						rating={rating}
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						key={ratingValue}
					></Stars>
				);
			})}
			<p className="text">{rating} (39 reviews) </p>
		</div>
	);
};

export default FuncStarRating;

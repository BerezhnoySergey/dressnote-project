import React from "react";
import { useState } from "react";
import "./FuncStarRating.scss";

const Star = ({ active, id, setRate }) => {
	return (
		<div
			onClick={() => {
				setRate(id);
			}}
			style={{ color: id <= active ? "gold" : null }}
		>
			<svg
				className="star__item"
				stroke="currentColor"
				fill="currentColor"
				stroke-width="0"
				viewBox="0 0 16 16"
				height="1em"
				width="1em"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
			</svg>
		</div>
	);
};

const StarRating = ({ rate = "3" }) => {
	const [value, setValue] = useState(rate);
	return (
		<>
			<div className="star">
				{[1, 2, 3, 4, 5].map((index) => (
					<Star id={index} setRate={setValue} active={value} key={index} />
				))}
				<p className="text">{value} (139 reviews) </p>
			</div>
		</>
	);
};
export default StarRating;

import { ReactComponent as Icon } from "./star.svg";
import React from "react";

function Stars(props) {
	return (
		<label>
			<input
				type="radio"
				name="rating"
				className="star__input"
				value={props.ratingValue}
				onClick={() => props.setRating(props.ratingValue)}
				id={props.key}
			/>
			<Icon
				width={20}
				height={20}
				key={props.key}
				fill={
					props.ratingValue <= (props.hover || props.rating)
						? "#ffd902"
						: "#747473"
				}
				className="star__icons"
				onMouseEnter={() => props.setRating(props.ratingValue)}
				onMouseLeave={() => props.setHover(props.onMouseLeave)}
			/>
		</label>
	);
}

export default Stars;

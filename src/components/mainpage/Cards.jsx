import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Cards = ({ image, price, title }) => {
	return (
		<div className="cards__wrapps">
			<div className="cards__item">
				<img src={image} alt="image" className="bg__img-cards" />
				<div className="slider__heart">
					<FaRegHeart className="slider__heart-item"></FaRegHeart>
				</div>
				<p className="slider__sub-text">{title}</p>
				<p className="slider__sub-text">${price}</p>
			</div>
		</div>
	);
};
export default Cards;

import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	favoritesAdd,
	favoritesRemove,
} from "../../redux/actions/favoritesAction";

const Cards = ({ value }) => {
	const { image, price, title, description, id } = value;
	const dispatch = useDispatch();
	const favorites = useSelector((store) => store.favorites);

	const inFavorites = () => {
		const result = favorites.filter((item) => item.id === id);
		if (result.length > 0) {
			return true;
		}
		return false;
	};

	const toggleFavorites = () => {
		if (inFavorites()) {
			dispatch(favoritesRemove(value));
		} else {
			dispatch(favoritesAdd(value));
		}
	};
	return (
		<div className="cards__wrapps">
			<div className="cards__item">
				<img src={image} className="bg__img-cards" alt="image-cards" />
				<div className="card__heart">
					<button
						className="card__heart-btn"
						onClick={() => {
							toggleFavorites();
						}}
					>
						<AiFillHeart
							className={`card__heart-item ${
								inFavorites() ? "card__heart-item_active" : null
							}`}
						></AiFillHeart>
					</button>
				</div>
				<Link to={`/product/${id}`}>
					<p className="card__sub-title" title={title}>
						{title}
					</p>
				</Link>
				<Link to="/favorites">
					<p className="card__sub-description">{description}</p>
				</Link>
				<p className="card__sub-text">${price}</p>
			</div>
		</div>
	);
};
export default Cards;

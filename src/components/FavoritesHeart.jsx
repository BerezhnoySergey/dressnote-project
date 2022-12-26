import React, { useDispatch, useSelector } from "react-redux";
import { favoritesAdd, favoritesRemove } from "./redux/actions/favoritesAction";
import { AiFillHeart } from "react-icons/ai";
import "../components/newIn/newIn.scss";

const FavoritesHeart = ({ value, id }) => {
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
	);
};

export default FavoritesHeart;

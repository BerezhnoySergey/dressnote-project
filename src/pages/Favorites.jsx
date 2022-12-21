import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/mainpage/Cards";

const Favorites = () => {
	const favorites = useSelector((store) => store.favorites);
	if (favorites.length > 0) {
		return favorites.map((item) => (
			<Cards value={item} key={`favorites_${item.id}`}></Cards>
		));
	}

	return <div>fd</div>;
};

export default Favorites;

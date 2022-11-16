import "./scss/HeaderBtn.scss";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const HeaderBtn = () => {
	let [cardOpen, setCardOpen] = useState(false);
	return (
		<div>
			<FaRegHeart
				className={`header__btn-heart no__margin ${cardOpen && "active"}`}
				onClick={() => setCardOpen(!cardOpen)}
			/>
			<FiUser
				className={`header__btn-heart ${cardOpen && "active"}`}
				onClick={() => setCardOpen(!cardOpen)}
			/>

			<FiShoppingBag
				className={`header__btn-heart ${cardOpen && "active"}`}
				onClick={() => setCardOpen(!cardOpen)}
			/>
		</div>
	);
};

export default HeaderBtn;

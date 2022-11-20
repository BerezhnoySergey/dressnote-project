import "./scss/HeaderBtn.scss";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const HeaderBtn = () => {
	// let [cardOpen, setCardOpen] = useState(false);${cardOpen && "active"}
	return (
		<div>
			<FaRegHeart
				className={`header__btn-heart no__margin `}
				// onClick={() => setCardOpen(!cardOpen)}
			/>
			<FiUser className={`header__btn-user `} />

			<FiShoppingBag className={`header__btn-bag`} />
		</div>
	);
};

export default HeaderBtn;

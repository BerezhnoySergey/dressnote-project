import "./scss/HeaderBtn.scss";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const HeaderBtn = () => {
	return (
		<div>
			<a href="/product/favorites">
				<FaRegHeart className={`header__btn-heart no__margin `} />
			</a>
			<FiUser className={`header__btn-user `} />
			<a href="/shopping_bag">
				<FiShoppingBag className={`header__btn-bag`} />
			</a>
		</div>
	);
};

export default HeaderBtn;

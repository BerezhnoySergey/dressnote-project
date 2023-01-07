import "./scss/HeaderBtn.scss";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderBtn = () => {
	return (
		<div>
			<Link to="/favorites">
				<FaRegHeart className={`header__btn-heart no__margin `} />
			</Link>
			<Link to="/signin">
				<FiUser className={`header__btn-user `} />
			</Link>
			<Link to="/shopping_bag">
				<FiShoppingBag className={`header__btn-bag`} />
			</Link>
		</div>
	);
};

export default HeaderBtn;

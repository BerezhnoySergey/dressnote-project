import React from "react";
import "../shoppingBag/shoppingBag.scss";
import { cartRemuveAll } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { FiTrash } from "react-icons/fi";

const ClearBag = ({ subtotal = 0 }) => {
	const dispatch = useDispatch();
	return (
		<div className="shoppbag__finalprice-contain shoppbag__border-top">
			<button
				className="shoppbag__clear-form"
				onClick={() => {
					dispatch(cartRemuveAll());
				}}
			>
				<FiTrash className="shoppbag__clear-btn" />
				<p className="shoppbag__clear-text"> Clear bag</p>
			</button>
			<div className="shoppbag__finalprice-wrap">
				<p className="shoppbag__finalprice-sub ">
					Subtotal:
					<span className="shoppbag__finalprice">${subtotal.toFixed(2)}</span>
				</p>
			</div>
		</div>
	);
};

export default ClearBag;

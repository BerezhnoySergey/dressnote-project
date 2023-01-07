import React from "react";
import "../../components/shoppingBag/shoppingBag.scss";

const FinalOrder = ({ subtotal = 0, shippingsum = 0 }) => {
	return (
		<div className="finalorder">
			<h2 className="finalorder__title">Order summary</h2>
			<div className="finalorder__subwrap">
				<p className="finalorder__sub">Subtotal</p>
				<p className="finalorder__sub">${subtotal.toFixed(2)}</p>
			</div>
			<div className="finalorder__subwrap finalorder__subwrapp">
				<p className="finalorder__sub">Shipping</p>
				<p className="finalorder__sub">${shippingsum.toFixed(2)}</p>
			</div>
			<p className="shoppbag__cards-sub">
				Spend $50 more to get free shipping!
			</p>
			<form className="finalorder__form">
				<input
					type="text"
					className="finalorder__input"
					placeholder="Promocode"
				/>
				<button className="finalorder__btn"> Apply</button>
			</form>
			<div className="finalorder__subwrap finalorder__wrap-total">
				<p className="finalorder__order-total">Order total</p>
				<p className="finalorder__order-total">
					${(subtotal + shippingsum).toFixed(2)}
				</p>
			</div>
			<button className="finalorder__checkout-btn">Proceed to checkout</button>
		</div>
	);
};

export default FinalOrder;

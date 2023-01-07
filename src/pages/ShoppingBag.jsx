import React from "react";
import "../components/shoppingBag/shoppingBag.scss";
import SliderTwo from "../components/mainpage/SliderTwo";
import Brands from "../components/mainpage/Brands";
import { useSelector } from "react-redux";
import BagItem from "../components/shoppingBag/BagItem";
import { useState } from "react";
import { useEffect } from "react";
import FinalOrder from "../components/shoppingBag/FinalOrder";
import ClearBag from "../components/shoppingBag/ClearBag";
import "../components/notfound/NotFound.scss";

const ShoppingBag = () => {
	const shopingCart = useSelector((store) => store.cart);
	const [subtotal, setSubtotal] = useState(0);

	useEffect(() => {
		const sum = shopingCart.reduce((accumulator, item) => {
			return accumulator + item.price * item.count;
		}, 0);
		const shippingsum = shopingCart.reduce((accumulator, item) => {
			return accumulator + item.costDelivery * item.count;
		}, 0);
		setSubtotal({ sum, shippingsum });
	}, [shopingCart]);

	if (shopingCart.length > 0) {
		return (
			<div className="shoppbag">
				<div className="shoppbag__wrap">
					<h1 className="shoppbag__title">Shopping bag</h1>
					<div className="shoppbag__contain">
						<div className="shoppbag__item-container">
							<div className="shoppbag__item-sub">
								<p className="shoppbag__sub">Item</p>
								<div className="shoppbag__item-sub-block">
									<p className="shoppbag__sub-price shoppbag__sub">Price</p>
									<p className="shoppbag__sub-quantity shoppbag__sub">
										Quantity
									</p>
									<p className="shoppbag__sub-total shoppbag__sub">Total</p>
								</div>
							</div>
							{shopingCart.map((item, index) => {
								return <BagItem key={`bag__item-${index}`} {...item} />;
							})}
							<ClearBag subtotal={subtotal.sum} />
						</div>

						<FinalOrder
							subtotal={subtotal.sum}
							shippingsum={subtotal.shippingsum}
						/>
					</div>
					<SliderTwo />
					<Brands />
				</div>
			</div>
		);
	}
	return (
		<div className="shoppbag">
			<div className="shoppbag__wrap">
				<div className="shoppbag__wrapper-noitem">
					<img
						src="https://media0.giphy.com/media/qRPrMNzJtkV0GOVPTk/giphy.gif?cid=6c09b952aae68ff897d38b1d15097bec65240ef2e0db8fab&amp;rid=giphy.gif&amp;ct=s"
						alt="Shop__svg"
						className="shoppbag__svg"
					/>
					<p className="shoppbag__noitem-title">Your goat is empty!</p>
					<p className="shoppbag__noitem-title">
						It's never too late to fix it =)
					</p>
					<form action="/Dressnote">
						<button className="notfound__btn shoppbag__btn-back">
							Back to shopping
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ShoppingBag;

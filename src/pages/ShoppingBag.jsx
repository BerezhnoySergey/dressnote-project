import React from "react";
import "../components/shoppingBag/shoppingBag.scss";
import ShoppingImg from "../components/shoppingBag/img/shopingbag.jpg";
import ShoppingImg2 from "../components/shoppingBag/img/shoppingbag2.jpg";
import { FiTrash } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import SliderTwo from "../components/mainpage/SliderTwo";
import Brands from "../components/mainpage/Brands";

const ShoppingBag = () => {
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
								<p className="shoppbag__sub-quantity shoppbag__sub">Quantity</p>
								<p className="shoppbag__sub-total shoppbag__sub">Total</p>
							</div>
						</div>
						<div className="shoppbag__cards-wrap shoppbag__item-container">
							<img src={ShoppingImg} alt="" className="shoppbag__img" />
							<div className="shoppbag__img-wrap">
								<p className="shoppbag__cards-sub">Misguided</p>
								<p className="shoppbag__cards-title">
									Printed poplin dress with puff sleeves
								</p>
								<p className="shoppbag__cards-sub">
									<span className="shoppbag__cards-sub">
										White/Red patterned
									</span>
								</p>
								<p className="shoppbag__cards-sub">
									Size: <span className="shoppbag__cards-sub">Size:</span>
								</p>
							</div>
							<div className="shoppbag__cards-infotext">
								<p className="shoppbag__cards-price">$44.90</p>
								<AiOutlineMinus className="shoppbag__cards-minus"></AiOutlineMinus>
								<p>1</p>
								<AiOutlinePlus className="shoppbag__cards-plus"></AiOutlinePlus>
								<p>$44.90</p>
								<VscChromeClose className="shoppbag__cards-cross"></VscChromeClose>
							</div>
						</div>

						<div className="shoppbag__cards-wrap shoppbag__item-container shoppbag__borderbottom">
							<img src={ShoppingImg2} alt="" className="shoppbag__img" />
							<div className="shoppbag__img-wrap">
								<p className="shoppbag__cards-sub">Misguided</p>
								<p className="shoppbag__cards-title">
									Printed poplin dress with puff sleeves
								</p>
								<p className="shoppbag__cards-sub">
									<span className="shoppbag__cards-sub">
										White/Red patterned
									</span>
								</p>
								<p className="shoppbag__cards-sub">
									Size: <span className="shoppbag__cards-sub">Size:</span>
								</p>
							</div>
							<div className="shoppbag__cards-infotext">
								<p className="shoppbag__cards-price">$44.90</p>
								<AiOutlineMinus className="shoppbag__cards-minus"></AiOutlineMinus>
								<p>1</p>
								<AiOutlinePlus className="shoppbag__cards-plus"></AiOutlinePlus>
								<p>$44.90</p>
								<VscChromeClose className="shoppbag__cards-cross"></VscChromeClose>
							</div>
						</div>
						<div className="shoppbag__finalprice-contain">
							<form className="shoppbag__clear-form">
								<FiTrash className="shoppbag__clear-bugicon" />
								<p className="shoppbag__clear-text"> Clear bag</p>
							</form>
							<div className="shoppbag__finalprice-wrap">
								<p className="shoppbag__finalprice-sub ">
									Subtotal:
									<span className="shoppbag__finalprice"> $110.80</span>
								</p>
							</div>
						</div>
					</div>

					<div className="finalorder">
						<h2 className="finalorder__title">Order summary</h2>
						<div className="finalorder__subwrap">
							<p className="finalorder__sub">Subtotal</p>
							<p className="finalorder__sub">$110.80</p>
						</div>
						<div className="finalorder__subwrap finalorder__subwrapp">
							<p className="finalorder__sub">Shipping</p>
							<p className="finalorder__sub">$5.95</p>
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
							<p className="finalorder__order-total">$116.75</p>
						</div>
						<button className="finalorder__checkout-btn">
							Proceed to checkout
						</button>
					</div>
				</div>

				<SliderTwo></SliderTwo>

				<Brands></Brands>
			</div>
		</div>
	);
};

export default ShoppingBag;

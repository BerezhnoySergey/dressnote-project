import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import "../../components/shoppingBag/shoppingBag.scss";
import { cartItemPatch } from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const BagItem = ({
	image,
	category,
	title,
	size,
	price = 0,
	count: itemCount = 0,
	itemId,
}) => {
	const [count, setCount] = useState(itemCount);
	const dispatch = useDispatch();

	return (
		<div className="shoppbag__cards-wrap shoppbag__item-container">
			<img src={image} alt="" className="shoppbag__img" />
			<div className="shoppbag__img-wrap">
				<p className="shoppbag__cards-sub">
					{category.replace(/^(.)/, (match) => match.toUpperCase())}
				</p>
				<p className="shoppbag__cards-title">{title}</p>
				<p className="shoppbag__cards-sub">
					<span className="shoppbag__cards-sub">White/Red patterned</span>
				</p>
				<p className="shoppbag__cards-sub">
					Size: <span className="shoppbag__cards-sub">{size}</span>
				</p>
			</div>
			<div className="shoppbag__cards-infotext">
				<p className="shoppbag__cards-price">${price}</p>
				<AiOutlineMinus
					className="shoppbag__cards-minus"
					onClick={() => {
						if (count >= 2) {
							setCount(count - 1);
							dispatch(cartItemPatch({ itemId, count: count - 1 }));
						}
					}}
				></AiOutlineMinus>
				<p className="shoppbag__cards-count">{count}</p>
				<AiOutlinePlus
					className="shoppbag__cards-plus"
					onClick={() => {
						setCount(count + 1);
						dispatch(cartItemPatch({ itemId, count: count + 1 }));
					}}
				></AiOutlinePlus>
				<p>${Math.ceil(price * count)}</p>
				<VscChromeClose className="shoppbag__cards-cross"></VscChromeClose>
			</div>
		</div>
	);
};

export default BagItem;

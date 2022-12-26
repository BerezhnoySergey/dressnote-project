import React, { useState } from "react";
import "../SearchElemeent/SearchElemeent.scss";
import { FiChevronDown } from "react-icons/fi";
const SizeSelection = () => {
	const [selectSize, setSelectSize] = useState(null);
	const [openSelect, setOpenSelect] = useState(true);
	const sizes = [
		{
			size: 34,
			title: "XS",
		},
		{
			size: 36,
			title: "S",
		},
		{
			size: 38,
			title: "M",
		},
		{
			size: 40,
			title: "L",
		},
	];

	return (
		<div>
			<button
				className="size__btn"
				onClick={() => {
					if (!openSelect) {
						setOpenSelect(true);
					} else {
						setOpenSelect(false);
					}
				}}
			>
				<div className="size__btn-wrap">
					<p className="size__btn-text">Size: {selectSize}</p>
					<FiChevronDown className="size__btn-dropdown" />
				</div>
			</button>
			<ul
				className={`size__btn-ul  ${
					openSelect ? "size__btn-ul-noshow" : "size__btn-ul-show"
				}`}
			>
				{sizes.map((value, size) => (
					<li
						onClick={() => {
							console.log(value);
							setSelectSize(value.title);
							setOpenSelect(true);
						}}
						className="size__btn-li"
						key={size}
					>
						{value.title}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SizeSelection;

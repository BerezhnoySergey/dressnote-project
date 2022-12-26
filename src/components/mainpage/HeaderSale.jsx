import React from "react";
import "./scss/HeaderSale.scss";
const HeaderSale = () => {
	return (
		<div className="headsale">
			<div className="headsale__wrap pulse">
				<h1 className="headsale__title">
					Up to 50% off all dresses when use code DRESSLOVER
				</h1>
				<a href="/notfound" className="headsale__link">
					Shop dresses
				</a>
			</div>
		</div>
	);
};

export default HeaderSale;

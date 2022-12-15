import React from "react";
import "./scss/HeaderSale.scss";
const HeaderSale = () => {
	return (
		<div className="container__headsale">
			<div className="container__sale pulse">
				<h1 className="container__saletext">
					Up to 50% off all dresses when use code DRESSLOVER
				</h1>
				<a href="/dressnote" className="headsale__link">
					Shop dresses
				</a>
			</div>
		</div>
	);
};

export default HeaderSale;

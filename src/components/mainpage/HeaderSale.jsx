import React from "react";
import "./scss/HeaderSale.scss";
import { Link } from "react-router-dom";

const HeaderSale = () => {
	return (
		<div className="headsale">
			<div className="headsale__wrap pulse">
				<h1 className="headsale__title">
					Up to 50% off all dresses when use code DRESSLOVER
				</h1>
				<Link to="/notfound" className="headsale__link">
					Shop dresses
				</Link>
			</div>
		</div>
	);
};

export default HeaderSale;

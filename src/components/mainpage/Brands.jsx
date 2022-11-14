import React from "react";
import "./scss/Brands.scss";
import NewBalance from "./img/newBalance.svg";
import Marttens from "./img/Marttens.svg";
import Converse from "./img/converse.svg";
import Steve from "./img/steve.svg";
import Ugg from "./img/ugg-australia.svg";

const Brands = () => {
	return (
		<div className="brands__container">
			<div className="brands__wrap">
				<img src={NewBalance} alt="NewBalance" />
				<img src={Marttens} alt="Marttens" />
				<img src={Converse} alt="Converse" />
				<img src={Steve} alt="Steve" />
				<img src={Ugg} alt="Ugg" />
				<a href="/" className="brands__link">
					All brands
				</a>
			</div>
		</div>
	);
};

export default Brands;

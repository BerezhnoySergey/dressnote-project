import React from "react";
import "./scss/Brands.scss";
import NewBalance from "./img/newBalance.svg";
import Marttens from "./img/Marttens.svg";
import Converse from "./img/converse.svg";
import Steve from "./img/steve.svg";
import Ugg from "./img/ugg-australia.svg";

const Brands = () => {
	return (
		<div className="brands">
			<div className="brands__wrap">
				<a
					href="https://newbalance.ua/store/sale?gclid=Cj0KCQiA4uCcBhDdARIsAH5jyUmEMP2vTp5xB0C1TOLXMuZUgO4eBTFeG4jMK7Ng6nlh9jR-Hs1gM-oaAgexEALw_wcB"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={NewBalance}
						alt="NewBalance"
						className="brands__newbalance"
					/>
				</a>
				<a
					href="https://martens.com.ua"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Marttens} alt="Marttens" className="brands__newbalance" />
				</a>
				<a
					href="https://converse.org.ua"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Converse} alt="Converse" className="brands__newbalance" />
				</a>
				<a
					href="https://www.stevemadden.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Steve} alt="Steve" className="brands__newbalance" />
				</a>
				<a
					href="https://www.uggs.com.au/?wmc-currency=EUR&gclid=Cj0KCQiA4uCcBhDdARIsAH5jyUlpySlkp6XQMstVFskonzcBUkX7HNiUW4pa601QDknQT8M_N7gNpvEaAhznEALw_wcB"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={Ugg} alt="Ugg" className="brands__newbalance" />
				</a>

				<a href="/notfound" className="brands__link">
					All brands
				</a>
			</div>
		</div>
	);
};

export default Brands;

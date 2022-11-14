import React from "react";
import "./scss/EcoBrands.scss";
const EcoBrands = () => {
	return (
		<div className="ecobrands__container">
			<div className="ecobrands__wrap">
				<div className="story__container">
					<h2 className="ecobrands__titile">
						{" "}
						Eco Aware brands: Exclusively at Dresnote
					</h2>
					<p className="ecobrands__text">
						Science Story is a collaboration between Dressnote and creative
						thinkers, researchers and brands who are developing cutting-edge
						materials designed to address the environmental impacts of the
						textile industry.
					</p>
					<button className="ecobrands__btn">Shop Eco collection</button>
				</div>
				<div className="ecobrands__img">
					<img src="./images/mainpage/ecobrands.jpg" alt="ecobrands.jpg" />
				</div>
			</div>
		</div>
	);
};
export default EcoBrands;

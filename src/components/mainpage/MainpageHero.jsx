import React from "react";
import "./scss/MainpageHero.scss";
import MainPageHeroCards from "./MainPageHeroCards";

const MainpageHero = () => {
	return (
		<>
			<div className="header__bgfoto">
				<MainPageHeroCards></MainPageHeroCards>
			</div>
		</>
	);
};

export default MainpageHero;

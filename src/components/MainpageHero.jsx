import React from "react";
import "../components/mainpage/scss/MainpageHero.scss";
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

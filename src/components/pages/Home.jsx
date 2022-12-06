import React from "react";
import HeaderSale from "../mainpage/HeaderSale";
import MainpageHero from "../mainpage/MainpageHero";
import Slider from "../mainpage/Slider";
import PictureBlock from "../mainpage/PictureBlock";
import EcoBrands from "../mainpage/EcoBrands";
import MainPageFoto from "../mainpage/MainPageFoto";
import Brands from "../mainpage/Brands";

import SliderTest2 from "../mainpage/SliderTest2";
const Home = () => {
	return (
		<>
			<HeaderSale />
			<MainpageHero />
			<Slider />
			<PictureBlock />
			<Slider />
			<EcoBrands />
			<MainPageFoto />
			<Brands />
		</>
	);
};

export default Home;

import React from "react";
import HeaderSale from "../mainpage/HeaderSale";
import MainpageHero from "../mainpage/MainpageHero";
import Slider from "../mainpage/Slider";
import PictureBlock from "../mainpage/PictureBlock";
import EcoBrands from "../mainpage/EcoBrands";
import MainPageFoto from "../mainpage/MainPageFoto";
import Brands from "../mainpage/Brands";

const Home = () => {
	return (
		<>
			<HeaderSale />
			<MainpageHero />
			<Slider />
			<PictureBlock />
			<Slider></Slider>
			<EcoBrands></EcoBrands>
			<MainPageFoto></MainPageFoto>
			<Brands></Brands>
		</>
	);
};

export default Home;

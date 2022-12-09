import React from "react";
import HeaderSale from "../mainpage/HeaderSale";
import MainpageHero from "../mainpage/MainpageHero";
import Slider from "../mainpage/Slider";
import PictureBlock from "../mainpage/PictureBlock";
import EcoBrands from "../mainpage/EcoBrands";
import MainPageFoto from "../mainpage/MainPageFoto";
import Brands from "../mainpage/Brands";
import SliderTwo from "../mainpage/SliderTwo";

const Home = () => {
	return (
		<>
			<HeaderSale />
			<MainpageHero />
			<Slider />
			<PictureBlock />
			<SliderTwo className="glide2" />
			<EcoBrands />
			<MainPageFoto />
			<Brands />
		</>
	);
};

export default Home;

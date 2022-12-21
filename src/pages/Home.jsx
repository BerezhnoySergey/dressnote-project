import React from "react";
import HeaderSale from "../components/mainpage/HeaderSale";
import MainpageHero from "../components/mainpage/MainpageHero";
import Slider from "../components/mainpage/Slider";
import PictureBlock from "../components/mainpage/PictureBlock";
import EcoBrands from "../components/mainpage/EcoBrands";
import MainPageFoto from "../components/mainpage/MainPageFoto";
import Brands from "../components/mainpage/Brands";
import SliderTwo from "../components/mainpage/SliderTwo";

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

import "./App.scss";
import DressnoteHeader from "./components/DressnoteHeader";
import HeaderSale from "./components/HeaderSale";
import MainpageHero from "./components/MainpageHero";
import Header from "./components/Header";
import Slider from "./components/mainpage/Slider";
import PictureBlock from "./components/mainpage/PictureBlock";
import EcoBrands from "./components/mainpage/EcoBrands";

import MainPageFoto from "./components/mainpage/MainPageFoto";
import Brands from "./components/mainpage/Brands";
import Footer from "./components/mainpage/Footer";
function App() {
	return (
		<>
			<DressnoteHeader />
			<Header></Header>
			<HeaderSale></HeaderSale>
			<MainpageHero></MainpageHero>
			<Slider></Slider>
			<PictureBlock></PictureBlock>
			<Slider></Slider>
			<EcoBrands></EcoBrands>
			<MainPageFoto></MainPageFoto>
			<Brands></Brands>
			<Footer></Footer>
		</>
	);
}

export default App;

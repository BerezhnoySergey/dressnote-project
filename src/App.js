import "./App.scss";
import DressnoteHeader from "./components/DressnoteHeader";
import HeaderSale from "./components/HeaderSale";
import MainpageHero from "./components/MainpageHero";
import Header from "./components/Header";
import Slider from "./components/mainpage/Slider";
function App() {
	return (
		<>
			<DressnoteHeader />
			<Header></Header>
			<HeaderSale></HeaderSale>
			<MainpageHero></MainpageHero>
			<Slider></Slider>
		</>
	);
}

export default App;

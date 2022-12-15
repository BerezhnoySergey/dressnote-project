import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import Home from "./components/pages/Home";
import NewIn from "./components/pages/NewIn";
import SearchElemeent from "./components/pages/SearchElemeent";
function App() {
	return (
		<Routes>
			<Route path="/" element={<HeaderFooter />}>
				<Route path="/Dressnote" index element={<Home />} />
				<Route path="/newIn" element={<NewIn />} />
				<Route path="/product/:id" element={<SearchElemeent />} />
			</Route>
		</Routes>
	);
}

export default App;

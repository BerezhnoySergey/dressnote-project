import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import Home from "./pages/Home";
import NewIn from "./pages/NewIn";
import SearchElemeent from "./pages/SearchElemeent";
import ShoppingBag from "./pages/ShoppingBag";
import NotFound from "./components/notfound/NotFound";
import Favorites from "./pages/Favorites";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HeaderFooter />}>
				<Route path="/Dressnote" index element={<Home />} />
				<Route path="/newIn" element={<NewIn />} />
				<Route path="/product/:id" element={<SearchElemeent />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/shopping_bag" element={<ShoppingBag />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/notfound" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;

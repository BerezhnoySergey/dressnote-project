import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HeaderFooter from "./components/HeaderFooter";
import Home from "./components/pages/Home";
import NewIn from "./components/pages/NewIn";

function App() {
	return (
		<Routes>
			<Route path="/" element={<HeaderFooter />}>
				<Route index element={<Home />} />
				<Route path="/newIn" element={<NewIn />} />
			</Route>
		</Routes>
	);
}

export default App;

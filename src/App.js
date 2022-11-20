import "./App.scss";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	);
}

export default App;

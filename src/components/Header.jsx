import React from "react";
import { Outlet } from "react-router-dom";
import DressnoteHeader from "./mainpage/DressnoteHeader";
import HeaderNav from "./mainpage/HeaderNav";

const Header = () => {
	return (
		<>
			<DressnoteHeader />
			<HeaderNav />
			<Outlet></Outlet>
		</>
	);
};

export default Header;

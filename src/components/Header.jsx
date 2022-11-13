import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import "../components/mainpage/scss/Header.scss";
const Header = () => {
	return (
		<header className="navbar__contain">
			<nav className="navbar__item">
				<div className="navbar">
					<a href="/" className="navbar__link">
						New in <FiChevronDown className="navbar__link-down" />
					</a>
					<a href="/Clothing" className="navbar__link">
						Clothing <FiChevronDown className="navbar__link-down" />
					</a>
					<a href="/Shoes" className="navbar__link">
						Shoes <FiChevronDown className="navbar__link-down" />
					</a>
					<a href="/Accessories" className="navbar__link">
						Accessories <FiChevronDown className="navbar__link-down" />
					</a>
					<a href="/Brands" className="navbar__link">
						Brands <FiChevronDown className="navbar__link-down" />
					</a>
					<a href="/Sale" className="navbar__link navbar__link-last">
						Sale <FiChevronDown className="navbar__link-down" />
					</a>
				</div>

				<form className="header__search">
					<GrSearch className="header__search-icon"></GrSearch>
					<input
						name="header__search"
						type="search"
						placeholder="Search for..."
						className="header__search-input"
					/>
				</form>
			</nav>
		</header>
	);
};

export default Header;

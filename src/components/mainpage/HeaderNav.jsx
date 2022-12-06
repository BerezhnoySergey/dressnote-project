import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";

import "./scss/Header.scss";

const HeaderNav = () => {
	return (
		<>
			<header className="navbar__contain">
				<nav className="navbar__item">
					<div className="navbar">
						<a href="/newIn" className="navbar__link">
							New in <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/" className="navbar__link">
							Clothing <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/" className="navbar__link">
							Shoes <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/" className="navbar__link">
							Accessories <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/" className="navbar__link">
							Brands <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/" className="navbar__link navbar__link-last">
							Sale <FiChevronDown className="navbar__link-down" />
						</a>
					</div>

					<form className="header__search">
						<button className="header__search-icon">
							{" "}
							<GrSearch className="header__search-icon-item" />
						</button>
						<input
							name="header__search"
							type="search"
							placeholder="Search for..."
							className="header__search-input"
						/>
					</form>
				</nav>
			</header>
		</>
	);
};

export default HeaderNav;

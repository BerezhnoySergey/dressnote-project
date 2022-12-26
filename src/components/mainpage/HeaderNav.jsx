import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import "./scss/Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { getClosing } from "../../api/WomenClos";
import { useState } from "react";
import {
	clothingLoading,
	clothingLoadingSuccess,
	clothingLoadingFailed,
} from "../redux/actions/clothingAction";

const SearchBar = () => {
	const [searchInput, setSearchInput] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const { clothing } = useSelector((store) => store.clothing);
	const dispatch = useDispatch();

	useEffect(() => {
		if (clothing.length === 0) {
			dispatch(clothingLoading());
			getClosing()
				.then(({ data }) => {
					dispatch(clothingLoadingSuccess(data));
				})
				.catch((error) => {
					dispatch(clothingLoadingFailed(error.message));
				});
		}
	}, [dispatch]);

	const closeSearch = () => {
		setSearchInput("");
		setSearchResult([]);
	};

	const searchDis = (e) => {
		setSearchInput(e.target.value);
		const filteredData = clothing.filter((item) => {
			if (e.target.value === "") {
				return null;
			}
			if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
				return item;
			}
		});
		if (filteredData.length === 0 && e.target.value.length !== 0) {
			setSearchResult([
				{
					title: "No data",
				},
			]);
		} else {
			setSearchResult(filteredData);
		}
	};

	return (
		<form className="header__search">
			<button className="header__search-icon">
				<GrSearch className="header__search-icon-item" />
			</button>
			<input
				name="header__search"
				type="search"
				placeholder="Search for..."
				className="header__search-input"
				onChange={searchDis}
				value={searchInput}
			/>
			{!!searchResult.length && (
				<div className="header__search-result">
					{searchResult.map(({ title, id }, index) => {
						return !!id ? (
							<Link
								to={`product/${id}`}
								className="header__search-link"
								onClick={closeSearch}
								key={`srch_${index}`}
							>
								<p className="header__search-resitem">{title}</p>
							</Link>
						) : (
							<p key={`srch_${index}`} className="header__search-resitem">
								{title}
							</p>
						);
					})}
				</div>
			)}
		</form>
	);
};

const HeaderNav = () => {
	return (
		<>
			<header className="navbar">
				<nav className="navbar__item">
					<div className="navbar__wrap">
						<a href="/newIn" className="navbar__link">
							New in <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/SearchElemeent" className="navbar__link">
							Clothing <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/notfound" className="navbar__link">
							Shoes <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/notfound" className="navbar__link">
							Accessories <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/notfound" className="navbar__link">
							Brands <FiChevronDown className="navbar__link-down" />
						</a>
						<a href="/notfound" className="navbar__link navbar__link-last">
							Sale <FiChevronDown className="navbar__link-down" />
						</a>
					</div>

					<SearchBar />
				</nav>
			</header>
		</>
	);
};

export default HeaderNav;

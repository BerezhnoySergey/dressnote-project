// import React from "react";
// import { GrSearch } from "react-icons/gr";
// import "./scss/Header.scss";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// const SearchBar = () => {
// 	const [searchResult, setSearchResult] = useState([]);
// 	const { clothing } = useSelector((store) => store.clothing);

// 	const searchDis = (e) => {
// 		const filteredData = clothing.filter((item) => {
// 			if (e.target.value === "") {
// 				return null;
// 			}
// 			if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
// 				return item;
// 			}
// 		});
// 		if (filteredData.length === 0 && e.target.value.length !== 0) {
// 			setSearchResult([
// 				{
// 					title: "No data",
// 				},
// 			]);
// 		} else {
// 			setSearchResult(filteredData);
// 		}
// 	};

// 	return (
// 		<form className="header__search">
// 			<button className="header__search-icon">
// 				<GrSearch className="header__search-icon-item" />
// 			</button>
// 			<input
// 				name="header__search"
// 				type="search"
// 				placeholder="Search for..."
// 				className="header__search-input"
// 				onChange={searchDis}
// 			/>
// 			{!!searchResult.length && (
// 				<div className="header__search-result">
// 					{searchResult.map(({ title }, index) => {
// 						return (
// 							<p key={`srch_${index}`} className="header__search-resitem">
// 								{title}
// 							</p>
// 						);
// 					})}
// 				</div>
// 			)}
// 		</form>
// 	);
// };

// export default SearchBar;

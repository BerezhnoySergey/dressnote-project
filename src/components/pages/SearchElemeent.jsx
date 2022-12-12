import React from "react";
import "../SearchElemeent/SearchElemeent.scss";
import SearchImg from "../SearchElemeent/img/filteredImg.jpg";
import SliderTwo from "../mainpage/SliderTwo";
import "../SearchElemeent/StarRating/FuncStarRating.scss";
import StarRating from "../SearchElemeent/StarRating/StarRating";

const SearchElemeent = () => {
	return (
		<div className="searchpage">
			<div className="searchpage__container">
				<p className="searchpage__bread">
					Home / Clothing / Dresses / Missguided / Missguided
				</p>
				<div className="searchpage__info-container">
					<img src={SearchImg} alt="SearchImg" className="searchpage__img" />
					<div className="searchpage__info-wrap">
						<p className="searchpage__subtitle">Missguided</p>
						<h2 className="searchpage__info-title">
							Printed poplin dress with puff sleeves{" "}
						</h2>
						<StarRating></StarRating>
						<p className="searchpage__price">$44.90</p>
						<div className="searchpage__selectcolor-wrap">
							<p className="searchpage__subtitle">Select color:</p>
							<p className="searchpage__subcolor">White/red patterned</p>
						</div>
						<div className="searchpage__color-wrap">
							<div className="searchpage__red"></div>
							<div className="searchpage__violet"></div>
						</div>
						<div className="searchpage__info-container">
							<p className="searchpage__subtitle">Select size:</p>
							<p className="searchpage__subtitle">Size guide</p>
						</div>
					</div>
				</div>
				<SliderTwo></SliderTwo>
			</div>
		</div>
	);
};

export default SearchElemeent;

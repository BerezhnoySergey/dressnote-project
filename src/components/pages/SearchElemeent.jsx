import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../SearchElemeent/SearchElemeent.scss";
import "../SearchElemeent/StarRating/FuncStarRating.scss";
import SliderTwo from "../mainpage/SliderTwo";
import StarRating from "../SearchElemeent/StarRating/StarRating";
import { Loader } from "../../loader/Loader";

const SearchElemeent = () => {
	const [loading, setLoading] = useState(true);
	const [productData, setProductData] = useState({});
	const { id } = useParams();
	const sizes = [
		{
			size: 32,
			title: "xs",
		},
		{
			size: 34,
			title: "s",
		},
	];
	useEffect(() => {
		setLoading(true);
		axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
			setProductData(data);
			console.log(data);
			setLoading(false);
		});
	}, [id]);

	const { title, category, description, image, price, rating } = productData;
	return loading ? (
		<Loader />
	) : (
		<div className="searchpage">
			<div className="searchpage__container">
				<p className="searchpage__bread">
					Home / Clothing / Dresses / Missguided / Missguided
				</p>
				<div className="searchpage__info-container">
					<img src={image} alt="SearchImg" className="searchpage__img" />
					<div className="searchpage__info-wrap">
						<p className="searchpage__subtitle">{category}</p>
						<h2 className="searchpage__info-title">{title}</h2>
						<StarRating rate={Math.round(rating?.rate)} vote={rating?.count} />
						<p className="searchpage__price">${price}</p>
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
						<h2 className="searchpage__subdetails">Product details:</h2>
						<p className="searchpage__subinfo">{description}</p>
					</div>
				</div>
				<SliderTwo></SliderTwo>
			</div>
		</div>
	);
};

export default SearchElemeent;

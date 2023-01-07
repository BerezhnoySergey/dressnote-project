import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/SearchElemeent/SearchElemeent.scss";
import "../components/SearchElemeent/StarRating/FuncStarRating.scss";
import SliderTwo from "../components/mainpage/SliderTwo";
import StarRating from "../components/SearchElemeent/StarRating/StarRating";
import { Loader } from "../components/loader/Loader";
import SizeSelection from "../components/sizeSelection/SizeSelection";
import { AiFillHeart } from "react-icons/ai";
import { cartAdd } from "../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const SearchElemeent = () => {
	const [loading, setLoading] = useState(true);

	const [productData, setProductData] = useState({});

	const { id } = useParams();

	const dispatch = useDispatch();

	const [selectSize, setSelectSize] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
			setProductData(data);
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
					<img src={image} alt={title} className="searchpage__img" />
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
						<SizeSelection
							selectSize={selectSize}
							setSelectSize={setSelectSize}
						/>
						<div className="searchpage__heart-contain">
							<button
								className="searchpage__add-btn"
								onClick={() => {
									dispatch(
										cartAdd({
											...productData,
											size: selectSize,
											costDelivery: 2,
											count: 1,
											itemId: uuidv4(),
										})
									);
								}}
							>
								Add to cart
							</button>

							<div className="searchpage__heart-wrap">
								<AiFillHeart className={`searchpage__heart-item`}></AiFillHeart>
							</div>
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

import React from "react";
import { useEffect } from "react";
import { getClosing } from "../api/WomenClos";
import { useDispatch, useSelector } from "react-redux";
import {
	clothingLoading,
	clothingLoadingSuccess,
	clothingLoadingFailed,
} from "../components/redux/actions/clothingAction";
import Cards from "../components/mainpage/Cards";
import "../components/newIn/newIn.scss";
import fotonewIn from "../components/newIn/img/nawIn.webp";
import { Loader } from "../loader/Loader";
import NetworkError from "../loader/networkError.gif";

const NewIn = () => {
	const dispatch = useDispatch();
	const { loading, error, clothingWomen } = useSelector(
		(store) => store.clothing
	);

	useEffect(() => {
		dispatch(clothingLoading());
		getClosing()
			.then(({ data }) => {
				dispatch(clothingLoadingSuccess(data));
			})
			.catch((error) => {
				dispatch(clothingLoadingFailed(error.message));
			});
	}, [dispatch]);

	return (
		<>
			<div className="nawIn__wrap">
				<div className="nawIn__contain">
					<div className="nawIn__inner">
						<div className="fotonewIn__wrap">
							<h2 className="fotonewIn__title">New in</h2>
							<p className="fotonewIn__subtitle">
								This season, inside is cancelled
							</p>
							<img src={fotonewIn} alt="foto" className="fotonewIn__item" />
						</div>
						<div className="slider__titleNewIn-wrapp">
							<button className="slider__title mb__null">New In</button>
						</div>
						<div className="newin__sub">
							<p className="newin__sub-text">1403 items</p>
							<p className="newin__sub-text">Sort by: Price Low-High</p>
						</div>
						<div className="cards__contain">
							<div className="cards__wrapp">
								{loading ? (
									<Loader />
								) : (
									clothingWomen &&
									clothingWomen.map((item) => {
										return (
											<Cards
												value={item}
												// image={image}
												// price={price}
												// title={title}
												// description={description}
												key={`newInItems__${item.id}`}
											></Cards>
										);
									})
								)}

								{error && (
									<div className="networkerror__contain">
										<img
											src={NetworkError}
											alt="NetworkError"
											className="networkerror__item"
										/>
										<p>Not found</p>
									</div>
								)}
							</div>
						</div>
						<div className="newin__more">
							<p className="newin__more-text border__bm">
								You’ve viewed 12 of 1403 products
							</p>
							<button className="newin__more-btn"> Load more</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default NewIn;

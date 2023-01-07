import { useSelector } from "react-redux";
import Cards from "../components/mainpage/Cards";
import "../components/mainpage/scss/favoritesPage.scss";
import "../components/shoppingBag/shoppingBag.scss";
import HeartNotFound from "../components/mainpage/img/heart.svg";
import { Link } from "react-router-dom";

const Favorites = () => {
	const favorites = useSelector((store) => store.favorites);

	if (favorites.length > 0) {
		return (
			<div className="favorites">
				<div className="favorites__wrap">
					<h1 className="favorites__title">Saved items</h1>
					<div className="favorites__sub-wrap">
						<p>{favorites.length} items</p>
					</div>
					<div className="favorites__card-contain">
						{favorites.map((item) => (
							<>
								<div className="favorites__card-contain-item">
									<Cards
										value={item}
										key={`favorites_${item.id}`}
										className="favorites__card"
									></Cards>
									<Link
										to={`/product/${item.id}`}
										className="favorites__link-btn"
									>
										<button className="favorites__btn-move">Move to bag</button>
									</Link>
								</div>
							</>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="favorites">
				<div className="favorites__wrap favorites__wrap-notfound">
					<img
						src={HeartNotFound}
						alt="HeartNotFound"
						className="favorites__img-heart"
					/>
					<p className="shoppbag__noitem-title">You have no saved items. </p>
					<p className="shoppbag__noitem-title">
						Start saving as you shop by selecting the little heart.
					</p>
					<form action="/Dressnote">
						<button className="notfound__btn shoppbag__btn-back favorites__noitem-btn">
							Back to shopping
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Favorites;

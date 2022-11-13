import React from "react";
import "../components/mainpage/scss/MainpageHero.scss";

const MainPageHeroCards = () => {
	return (
		<>
			<div className="maincards__container">
				<div className="maincards__wrap">
					<div className="maincards__box">
						<img
							src="./images/mainpage/image66.jpg"
							alt="foto"
							className="maincadrs__img"
						/>
						<button className="maincards__btn">Dresses</button>
					</div>

					<div className="maincards__box">
						<img
							src="./images/mainpage/image268.jpg"
							alt="foto"
							className="maincadrs__img"
						/>
						<button className="maincards__btn">Skirts</button>
					</div>

					<div className="maincards__box">
						<img
							src="./images/mainpage/image267.webp"
							alt="foto"
							className="maincadrs__img"
						/>
						<button className="maincards__btn">Tops</button>
					</div>

					<div className="maincards__box">
						<img
							src="./images/mainpage/image269.webp"
							alt="foto"
							className="maincadrs__img"
						/>
						<button className="maincards__btn">Bags</button>
					</div>

					<div className="maincards__box">
						<img
							src="./images/mainpage/image271.webp"
							alt="foto"
							className="maincadrs__img"
						/>
						<button className="maincards__btn">Swimwear</button>
					</div>

					<div className="maincards__box">
						<img
							src="./images/mainpage/image270.webp"
							alt="foto"
							className="maincadrs__img"
						/>
						<button className="maincards__btn">Shoes</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPageHeroCards;

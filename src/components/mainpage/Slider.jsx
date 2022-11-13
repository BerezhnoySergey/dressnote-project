import React from "react";
import "../mainpage/scss/SliderMain.scss";
import { FaRegHeart } from "react-icons/fa";
const Slider = () => {
	return (
		<div className="slider__container">
			<div className="slider__wrapper">
				<button className="slider__title">New arrivals</button>
				<div className="slider__wrp">
					<div className="slider__wrap">
						<div className="bg__img">
							{" "}
							<div className="slider__heart">
								<FaRegHeart className="slider__heart-item"></FaRegHeart>
							</div>
						</div>
						<button className="slider__sub">ZARA</button>
						<p className="slider__sub-text">Patterned suite</p>
						<p className="slider__sub-text">$75.90</p>
					</div>

					<div className="slider__wrap">
						<div className="bg__img">
							{" "}
							<div className="slider__heart">
								<FaRegHeart className="slider__heart-item"></FaRegHeart>
							</div>
						</div>
						<button className="slider__sub">ZARA</button>
						<p className="slider__sub-text">Patterned suite</p>
						<p className="slider__sub-text">$75.90</p>
					</div>

					<div className="slider__wrap">
						<div className="bg__img">
							{" "}
							<div className="slider__heart">
								<FaRegHeart className="slider__heart-item"></FaRegHeart>
							</div>
						</div>
						<button className="slider__sub">ZARA</button>
						<p className="slider__sub-text">Patterned suite</p>
						<p className="slider__sub-text">$75.90</p>
					</div>

					<div className="slider__wrap">
						<div className="bg__img">
							{" "}
							<div className="slider__heart">
								<FaRegHeart className="slider__heart-item"></FaRegHeart>
							</div>
						</div>
						<button className="slider__sub">ZARA</button>
						<p className="slider__sub-text">Patterned suite</p>
						<p className="slider__sub-text">$75.90</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;

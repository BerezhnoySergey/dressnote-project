import React from "react";
import "../mainpage/scss/SliderMain.scss";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { FaRegHeart } from "react-icons/fa";
const SliderTest2 = () => {
	return (
		<Glider
			draggable
			hasArrows
			scrollLock
			propagateEvent
			duration={0.2}
			scrollLockDelay={200}
			slidesToShow={4}
			slidesToScroll={1}
		>
			<div>
				<div className="slider__wrap">
					<div className="bg__img ">
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

			<div>
				<div className="slider__wrap">
					<div className="bg__img ">
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

			<div>
				<div className="slider__wrap">
					<div className="bg__img ">
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

			<div>
				<div className="slider__wrap">
					<div className="bg__img ">
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
			<div>2</div>
			<div>3</div>
		</Glider>
	);
};
const SliderTest22 = () => {
	return (
		<div className="slider__container">
			<div className="slider__wrapper">
				<button className="slider__title">New arrivals</button>

				<div className="slider__wrp">{SliderTest2()}</div>
			</div>
		</div>
	);
};

export default SliderTest22;

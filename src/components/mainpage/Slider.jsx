import React from "react";
import "../mainpage/scss/SliderMain.scss";
import { FaRegHeart } from "react-icons/fa";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
const glideConfig = {
	perView: 4,
	type: "carousel",
	startAt: 0,
	autoplay: 3000,
	// keyboard: true,
	// hoverpause: true,
	// animationDuration: 2000,
	animationTimingFunc: "linear",
};

const Slider = () => {
	const glide = new Glide(".glide", glideConfig);
	useEffect(() => {
		glide.mount();
	}, [glide]);
	return (
		<div className="slider__container">
			<div className="slider__wrapper">
				<div className="slider__wrp">
					<div className="glide  ">
						<div className="slider__arrrow-wrap">
							<button className="slider__title">New arrivals</button>
							<div
								className="glide__arrows glide__style"
								data-glide-el="controls"
							>
								<button className=" glide__style" data-glide-dir="<">
									<BsArrowLeft className="arrow__glide" />
								</button>
								<button className=" glide__style" data-glide-dir=">">
									<BsArrowRight className="arrow__glide" />
								</button>
							</div>
						</div>

						<div className="glide__track" data-glide-el="track">
							<ul className="glide__slides">
								<li className="glide__slide">
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
								</li>

								<li className="glide__slide">
									<div className="slider__wrap">
										<div className="bg__img slider__img2">
											{" "}
											<div className="slider__heart">
												<FaRegHeart className="slider__heart-item"></FaRegHeart>
											</div>
										</div>
										<button className="slider__sub">Desigual</button>
										<p className="slider__sub-text">
											Ethnic dress with embroidery
										</p>
										<p className="slider__sub-text">$139.90</p>
									</div>
								</li>

								<li className="glide__slide">
									{" "}
									<div className="slider__wrap">
										<div className="bg__img slider__img3">
											{" "}
											<div className="slider__heart">
												<FaRegHeart className="slider__heart-item"></FaRegHeart>
											</div>
										</div>
										<button className="slider__sub">ZARA</button>
										<p className="slider__sub-text">Patchwork mini skirt</p>
										<p className="slider__sub-text ">$55.90</p>
									</div>
								</li>

								<li className="glide__slide">
									{" "}
									<div className="slider__wrap">
										<div className="bg__img slider__img4">
											{" "}
											<div className="slider__heart">
												<FaRegHeart className="slider__heart-item"></FaRegHeart>
											</div>
										</div>
										<button className="slider__sub">Monki</button>
										<p className="slider__sub-text">Ultramarine culottes</p>
										<p className="slider__sub-text">$62.90</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Slider;

import React from "react";
import "../mainpage/scss/SliderMain.scss";
import { FaRegHeart } from "react-icons/fa";
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

const glideConfig = {
	perView: 4,
	startAt: 0,
	focusAt: 0,
	type: "carousel",
	autoplay: 2000,
	keyboard: true,
	// hoverpause: true,
	// animationDuration: 2000,
	// animationTimingFunc: "linear",
};

const SliderTwo = ({ className = "glide" }) => {
	const glide = new Glide(`.${className}`, glideConfig);
	useEffect(() => {
		glide.mount();
	}, [glide]);
	return (
		<div className="slider__container">
			<div className="slider__wrapper">
				<div className="slider__wrp">
					<div className={`${className} slider__width-fix`}>
						<div className="slider__arrrow-wrap">
							<button className="slider__title">Our picks for you</button>
							<div
								className="glide__arrows glide__style"
								data-glide-el="controls"
							>
								<button className=" glide__style" data-glide-dir="<">
									<BsArrowLeft className="arrow__glide arrow__glide-left" />
								</button>
								<button className=" glide__style" data-glide-dir=">">
									<BsArrowRight className="arrow__glide" />
								</button>
							</div>
						</div>

						<div className="glide__track" data-glide-el="track">
							<ul className="glide__slides ">
								<li className="glide__slide">
									<div className="slider__wrap">
										<div className="bg__img slider2__img0 ">
											<div className="slider__heart">
												<FaRegHeart className="slider__heart-item"></FaRegHeart>
											</div>
										</div>
										<button className="slider__sub">Reclaimed Vintage</button>
										<p className="slider__sub-text">
											Lounge style pleated suit
										</p>
										<p className="slider__sub-text">$82.90</p>
									</div>
								</li>

								<li className="glide__slide">
									<div className="slider__wrap">
										<div className="bg__img slider2__img1">
											<div className="slider__heart">
												<FaRegHeart className="slider__heart-item"></FaRegHeart>
											</div>
										</div>
										<button className="slider__sub">Ted Baker</button>
										<p className="slider__sub-text">Cropped suit in pink</p>
										<p className="slider__sub-text">$36.90</p>
									</div>
								</li>

								<li className="glide__slide">
									<div className="slider__wrap">
										<div className="bg__img slider2__img2 ">
											<div className="slider__heart">
												<FaRegHeart className="slider__heart-item"></FaRegHeart>
											</div>
										</div>
										<button className="slider__sub">Monki</button>
										<p className="slider__sub-text">Fine knit mini dress</p>
										<p className="slider__sub-text ">$42.00</p>
									</div>
								</li>
								<li className="glide__slide">
									{" "}
									<div className="slider__wrap">
										<div className="bg__img slider2__img3">
											{" "}
											<div className="slider__heart">
												<FaRegHeart className="slider__heart-item"></FaRegHeart>
											</div>
										</div>
										<button className="slider__sub">People tree</button>
										<p className="slider__sub-text">Printed mini shirt dress</p>
										<p className="slider__sub-text slider__subtext-sale">
											$35.90 <div className="slider__old-price">$51.90</div>
										</p>
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
export default SliderTwo;

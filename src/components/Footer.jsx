import React from "react";
import "./mainpage/scss/Footer.scss";
import Instagram from "./mainpage/img/instagram.svg";
import Facebook from "./mainpage/img/facebook.svg";
import Twitter from "./mainpage/img/twitter.svg";
import Pinterest from "./mainpage/img/pinterest.svg";
import Youtube from "./mainpage/img/youtube.svg";
import Dressnote from "./mainpage/img/DRESSNOTE.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="footer__wrap">
					<div className="footer__support">
						<ul className="footer__nav-list">
							<li className="footer__nav-item">
								<a
									href="/"
									className="footer__nav-link nav__link-bolt footer__nav-item-botoom "
								>
									Customer support
								</a>
							</li>
							<li className="footer__nav-item">
								<a href="/" className="footer__nav-link">
									Size guides
								</a>
							</li>
							<li className="footer__nav-item">
								<a href="/" className="footer__nav-link">
									Shipping
								</a>
							</li>
							<li className="footer__nav-item">
								<a href="/" className="footer__nav-link">
									Returns
								</a>
							</li>
							<li className="footer__nav-item footer__nav-item-nobotoom">
								<a href="/" className="footer__nav-link">
									Track my order
								</a>
							</li>
						</ul>
					</div>

					<div className="footer__support">
						<ul className="footer__nav-list">
							<li className="footer__nav-item">
								<a
									href="/"
									className="footer__nav-link nav__link-bolt footer__nav-item-botoom"
								>
									My account
								</a>
							</li>
							<li className="footer__nav-item">
								<a href="/" className="footer__nav-link">
									Order history
								</a>
							</li>
							<li className="footer__nav-item">
								<a href="/" className="footer__nav-link">
									Payment methods
								</a>
							</li>
							<li className="footer__nav-item">
								<a href="/" className="footer__nav-link">
									Account settings
								</a>
							</li>
							<li className="footer__nav-item footer__nav-item-nobotoom">
								<a href="/" className="footer__nav-link">
									Favorites
								</a>
							</li>
						</ul>
					</div>
					<div className="footer__email">
						<p className="footer__email-text">
							Sign up today for email exclusives including early access to Sale,
							the latest trends and arrivals from your favorite designers and
							can’t miss promotions.
						</p>
						<form className="email__form">
							<input
								type="email"
								className="email__input"
								placeholder="Enter your Email"
							/>
							<button className="email__btn">Subscribe</button>
						</form>
						<div className="footer__socials">
							<img
								src={Instagram}
								alt="Instagram"
								className="footer__socials-item"
							/>
							<img
								src={Facebook}
								alt="Facebook"
								className="footer__socials-item"
							/>
							<img
								src={Twitter}
								alt="Twitter"
								className="footer__socials-item"
							/>
							<img
								src={Pinterest}
								alt="Pinterest"
								className="footer__socials-item"
							/>
							<img
								src={Youtube}
								alt="Youtube"
								className="footer__socials-item"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__dress">
				<div className="footer__dress-wrap">
					<Link to="/dressnote">
						<img src={Dressnote} alt="Dressnote" />
					</Link>
					<p className="footer__copyright">&copy; 2021 All rights reserved</p>
				</div>
			</div>
		</>
	);
};

export default Footer;

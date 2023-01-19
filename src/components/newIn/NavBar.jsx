import React from "react";
import { Link } from "react-router-dom";
import "../newIn/newIn.scss";

const NavBar = () => {
	return (
		<div className="search__bar">
			<div className="search__bar-contain">
				<p className="search__bar-title">Categories</p>
				<div className="search__bar-nav_wrap">
					<ul className="search__bar-nav">
						<li className="search__bar-nav_link">
							<Link to="#" className="search__bar-nav_item">
								Jackets & Outwear
							</Link>
						</li>
						<li className="search__bar-nav_link">
							<Link to="#" className="search__bar-nav_item">
								Tops
							</Link>
						</li>
						<li className="search__bar-nav_link">
							<Link to="#" className="search__bar-nav_item">
								T-shirts
							</Link>
						</li>
						<li className="search__bar-nav_link">
							<Link to="#" className="search__bar-nav_item">
								Shirts & Blouses
							</Link>
						</li>
						<li className="search__bar-nav_link">
							<Link to="#" className="search__bar-nav_item">
								Dresses
							</Link>
						</li>
						<li className="search__bar-nav_link">
							<Link to="#" className="search__bar-nav_item">
								Skirts & Shorts
							</Link>
						</li>
					</ul>
				</div>
				<div className="search__bar-size">
					<p className="search__bar-title"> Size</p>
					<input
						type="search"
						name=""
						id=""
						className="search__bar-input-icon"
					/>
				</div>
			</div>
		</div>
	);
};

export default NavBar;

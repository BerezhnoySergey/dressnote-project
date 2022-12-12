import React, { Component } from "react";
import Stars from "./Star";

export default class ClassStarRating extends Component {
	constructor(props) {
		super(props);

		this.setRating = this.setRating.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);

		this.state = {
			count: this.props.count,
			hover: this.props.hover,
		};
	}

	setRating(ratingValue) {
		this.setState({ ...this.state, hover: ratingValue, count: ratingValue });
	}

	onMouseEnter() {
		console.log("навели");
	}

	onMouseLeave() {
		console.log("перевели");
	}

	render() {
		return (
			<div className="star__container">
				{[...Array(5)].map((star, item) => {
					const ratingValue = item + 1;

					return (
						<Stars
							ratingValue={ratingValue}
							setRating={this.setRating}
							hover={this.state.hover}
							rating={this.state.rating}
							onMouseEnter={this.onMouseEnter}
							onMouseLeave={this.onMouseLeave}
							key={ratingValue}
							color={
								ratingValue <= (this.state.hover || this.state.count)
									? "#ffd902"
									: "#747473"
							}
						></Stars>
					);
				})}
				<p className="text">Твой рейтинг {this.state.count}. </p>
			</div>
		);
	}
}

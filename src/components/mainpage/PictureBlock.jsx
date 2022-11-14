import React from "react";
import "./scss/PictureBlock.scss";

const PictureBlock = () => {
	return (
		<div className="pictureblock__container">
			<div className="pictureblock__wrap">
				<img
					src="./images/mainpage/PictureBlock1.jpg"
					alt=""
					className="pictureblock__img"
				/>
				<img
					src="./images/mainpage/PictureBlock2.jpg"
					alt=""
					className="pictureblock__img"
				/>
			</div>
		</div>
	);
};

export default PictureBlock;

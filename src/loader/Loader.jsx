import React from "react";

import "../components/newIn/newIn.scss";
const Loader = () => {
	return (
		<div className="lds-ring ">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
export { Loader };

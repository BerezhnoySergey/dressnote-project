import React from "react";

import "../newIn/newIn.scss";

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

import React from "react";

import "../components/newIn/newIn.scss";
const Loader = () => {
	return (
		<div class="lds-ring ">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
export { Loader };

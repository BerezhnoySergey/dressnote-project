import axios from "axios";

const getClosing = async function () {
	return axios.get(
		"https://fakestoreapi.com/products/category/women's clothing"
	);
};

export { getClosing };

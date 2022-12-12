import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./reducers/clothingReducer";

const store = configureStore({
	reducer: {
		clothing: clothingReducer,
	},
});

export default store;

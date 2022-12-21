import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./reducers/clothingReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const store = configureStore({
	reducer: {
		clothing: clothingReducer,
		favorites: favoritesReducer,
	},
});

export default store;

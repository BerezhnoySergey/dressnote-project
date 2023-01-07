import { configureStore } from "@reduxjs/toolkit";
import clothingReducer from "./reducers/clothingReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import cartReduсer from "./reducers/cartReduсer";

const store = configureStore({
	reducer: {
		clothing: clothingReducer,
		favorites: favoritesReducer,
		cart: cartReduсer,
	},
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./reducers/userReducer";
import clothingReducer from "./reducers/clothingReducer";

const store = configureStore({
	reducer: {
		// user: userReducer,
		clothing: clothingReducer,
	},
});

export default store;

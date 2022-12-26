import { createReducer } from "@reduxjs/toolkit";

const clothingReducer = createReducer({ clothing: [] }, (builder) => {
	builder
		.addCase("USER_LOADING", (store) => {
			return { ...store, loading: true };
		})
		.addCase("USER_LOADING_SUCCESS", (store, action) => {
			return { ...store, loading: false, clothing: action.payload };
		})
		.addCase("USER_LOADING_FAILED", (store, action) => {
			return { ...store, loading: false, error: action.payload };
		});
});

export default clothingReducer;

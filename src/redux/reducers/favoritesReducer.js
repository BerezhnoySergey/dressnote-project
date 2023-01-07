import { createReducer } from "@reduxjs/toolkit";

const favoritesReducer = createReducer([], (builder) => {
	builder
		.addCase("FAVORITES_ADD", (store, { payload }) => {
			return [...store, payload];
		})
		.addCase("FAVORITES_REMUVE", (store, { payload }) => {
			const data = store.filter((item) => item.id !== payload.id);
			return data;
		});
});

export default favoritesReducer;

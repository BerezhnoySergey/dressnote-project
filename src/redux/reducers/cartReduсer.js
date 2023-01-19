import { createReducer } from "@reduxjs/toolkit";

const cartReduсer = createReducer([], (builder) => {
	builder
		.addCase("CART_ADD", (store, { payload }) => {
			return [...store, payload];
		})
		.addCase("CART_ITEM_PATCH", (store, { payload }) => {
			return [
				...store.map((item) => {
					if (item.itemId === payload.itemId) {
						return { ...item, count: payload.count };
					}
					return item;
				}),
			];
		})
		.addCase("CART_REMUVE", (store, { payload }) => {
			const data = store.filter((item) => item.itemId !== payload.itemId);
			return data;
		})
		.addCase("CART_REMUVE_ALL", () => {
			return [];
		});
});

export default cartReduсer;

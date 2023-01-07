import { createReducer } from "@reduxjs/toolkit";

const defaultUserReducer = {
	userName: "test",
};

const userReducer = createReducer({ defaultUserReducer }, (builder) => {
	builder
		.addCase("USER_SIGNUP", (store, action) => {
			return { ...store, ...action.payload };
		})
		.addCase("USER_DELETED", (store, action) => {
			return { ...store, ...action.payload };
		});
});

export default userReducer;

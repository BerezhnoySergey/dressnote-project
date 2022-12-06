import { createAction } from "@reduxjs/toolkit";
// old metod
// function userSingUp(userName) {
// 	return {
// 		type: "USER_SIGNUP",
// 		payload: { userName },
// 	};
// }

const userSingUp = createAction("USER_SIGNUP");

export { userSingUp };

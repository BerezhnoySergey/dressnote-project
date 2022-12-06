import { createAction } from "@reduxjs/toolkit";

const clothingLoading = createAction("USER_LOADING");
const clothingLoadingSuccess = createAction("USER_LOADING_SUCCESS");
const clothingLoadingFailed = createAction("USER_LOADING_FAILED");

export { clothingLoading, clothingLoadingSuccess, clothingLoadingFailed };

import { createAction } from "@reduxjs/toolkit";

const favoritesAdd = createAction("FAVORITES_ADD");
const favoritesRemove = createAction("FAVORITES_REMOVE");

export { favoritesAdd, favoritesRemove };

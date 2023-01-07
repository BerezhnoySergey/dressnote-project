import { createAction } from "@reduxjs/toolkit";

const cartAdd = createAction("CART_ADD");
const cartItemPatch = createAction("CART_ITEM_PATCH");
const cartRemuveAll = createAction("CART_REMUVE_ALL");

export { cartAdd, cartItemPatch, cartRemuveAll };

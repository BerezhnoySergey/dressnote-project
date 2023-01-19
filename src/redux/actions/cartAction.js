import { createAction } from "@reduxjs/toolkit";

const cartAdd = createAction("CART_ADD");
const cartItemPatch = createAction("CART_ITEM_PATCH");
const cartRemuveAll = createAction("CART_REMUVE_ALL");
const cartRemuve = createAction("CART_REMUVE");

export { cartAdd, cartItemPatch, cartRemuveAll, cartRemuve };

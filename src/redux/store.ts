import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";
import citySlice from "./slices/citySlice";
import filterSlice from "./slices/filterSlice";
import getAccessoriesSlice from "./slices/getAccessoriesSlice";
import getProductsSlice from "./slices/getProductsSlice";
import searchProductsSlice from "./slices/searchProductsSlice";

const store = configureStore({
  reducer: {
    products: getProductsSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
    cities: citySlice,
    filter: filterSlice,
    accessories: getAccessoriesSlice,
    search: searchProductsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
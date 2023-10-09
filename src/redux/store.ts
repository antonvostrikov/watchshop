import { configureStore } from "@reduxjs/toolkit";

import getWatchesSlice from "./slices/getWatchesSlice";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";
import citySlice from "./slices/citySlice";

const store = configureStore({
  reducer: {
    watches: getWatchesSlice,
    cart: cartSlice,
    favorite: favoriteSlice,
    cities: citySlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
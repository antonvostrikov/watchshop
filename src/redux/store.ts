import { configureStore } from "@reduxjs/toolkit";

import getWatchesSlice from "./slices/getWatchesSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    watches: getWatchesSlice,
    cart: cartSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
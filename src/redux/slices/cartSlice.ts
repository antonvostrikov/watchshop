import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type CartProduct = {
  img: string
  name: string
  sum: number
  price: number
}

type Cart = {
  cart: CartProduct[]
  total: number
}

export const addToCart = createAsyncThunk<CartProduct, CartProduct>(
  'cart/addToCart',
  async (obj) => {
    try {
      const { data } = await axios.post('http://localhost:3001/cart', obj)

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const initialState: Cart = {
  cart: [],
  total: 0
}

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload)
    })
  }
})

export default cartSlice.reducer
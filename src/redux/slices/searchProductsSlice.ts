import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { IProduct } from "../../interfaces/product.interface";
import { ISearchProductsState } from "../../interfaces/searchProducts.interface";

const initialState: ISearchProductsState = {
  searchProducts: []
}

export const searchProduct = createAsyncThunk<IProduct[], string>(
  'search/searchProducts', 
  async (findProducts) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/products?q=${findProducts}`)

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const searchProductsSlice = createSlice({
  initialState,
  reducers: {},
  name: 'search',
  extraReducers: (builder) => {
    builder.addCase(searchProduct.fulfilled, (state, action) => {
      state.searchProducts = action.payload
    })
  }
})

export default searchProductsSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

import { ICart, ICartProduct } from '../../interfaces/cart.interface'

export const addProductToCart = createAsyncThunk<ICartProduct, ICartProduct, { state: RootState }>(
  'cart/addToCart',
  async (obj, { getState }) => {
    const findProduct = getState().cart.cart.find(product => product.id === obj.id)

    if (findProduct) {
      const { data } = await axios.put(`http://localhost:3001/cart/${findProduct.id}`, {
        id: findProduct.id,
        imageUrl: findProduct.imageUrl,
        name: findProduct.name,
        sum: findProduct.sum + 1,
        price: findProduct.price + obj.price,
        total: findProduct.price * findProduct.sum
      })

      return data
    } else {
      const { data } = await axios.post('http://localhost:3001/cart', obj)

      return data
    }
  }  
)

export const getProductsFromCart = createAsyncThunk<ICartProduct[]>(
  'cart/getDataFromCart',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/cart')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const deleteProductFromCart = createAsyncThunk<number, number>(
  'cart/deleteProductFromCart',
  async (id) => {
    const response = await axios.delete(`http://localhost:3001/cart/${id}`)

    if (!response) {
      console.log('error')
    }

    return id
  }
)

export const plusProductToCart = createAsyncThunk<ICartProduct, number, { state: RootState }>(
  'cart/plusProductToCart',
  async (id, { getState }) => {
    const findProduct = getState().cart.cart.find(product => product.id === id)

    if (findProduct) {
      const { data } = await axios.put(`http://localhost:3001/cart/${id}`, { 
        id: id,
        imageUrl: findProduct.imageUrl,
        name: findProduct.name,
        sum: findProduct.sum+1,
        price: findProduct.price,
        total: (findProduct.price * findProduct.sum) + findProduct.price
      })
     
      return data
    }
  }
)

export const minusProductToCart = createAsyncThunk<ICartProduct, number, { state: RootState }>(
  'cart/minusProductToCart',
  async (id, { getState }) => {
    const findProduct = getState().cart.cart.find(product => product.id === id)

    if (findProduct) {
      const { data } = await axios.put(`http://localhost:3001/cart/${id}`, { 
        id: id,
        imageUrl: findProduct.imageUrl,
        name: findProduct.name,
        sum: findProduct.sum - 1,
        price: findProduct.price,
        total: findProduct.total - findProduct.price
      })

      return data
    }
  }
)

const initialState: ICart = {
  cart: [],
  total: 0,
  count: 0
}

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const findProduct = state.cart.find(product => product.id === action.payload.id)

      if (findProduct) {
        findProduct.sum = findProduct.sum+1

        findProduct.price = action.payload.price
      } else {
        state.cart.push(action.payload)
      }
    })
    builder.addCase(getProductsFromCart.fulfilled, (state, action) => {
      state.cart = action.payload

      state.total = state.cart.reduce((sum, obj) => (obj.price * obj.sum) + sum, 0)
      state.count = state.cart.reduce((sum, obj) => (obj.sum + sum), 0)
    })
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      const findProduct = state.cart.find(item => item.id === action.payload) 

      if (findProduct) {
        state.total = state.total - findProduct.total
        state.count = state.count - findProduct.sum
      }

      state.cart = state.cart.filter(product => product.id !== action.payload)
    })
    builder.addCase(plusProductToCart.fulfilled, (state, action) => {
      const findProduct = state.cart.find(product => product.id === action.payload.id)

      if (findProduct) {
        findProduct.sum = action.payload.sum
        findProduct.total = action.payload.total

        state.total = state.total + action.payload.price
        state.count = state.count + 1
      }
    })
    builder.addCase(minusProductToCart.fulfilled, (state, action) => {
      const findProduct = state.cart.find(product => product.id === action.payload.id)

      if (findProduct) {
        findProduct.sum = action.payload.sum
        findProduct.total = action.payload.total
        
        state.count = state.count - 1
        state.total = state.total - action.payload.price
      }
    })
  }
})

export default cartSlice.reducer
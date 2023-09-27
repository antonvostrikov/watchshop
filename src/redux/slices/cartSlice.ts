import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type CartProduct = {
  id: number
  imageUrl: string
  name: string
  sum: number
  price: string
}

type Cart = {
  cart: CartProduct[]
  total: number
}

export const addProductToCart = createAsyncThunk<CartProduct, CartProduct, { state: RootState }>(
  'cart/addToCart',
  async (obj, { getState }) => {
    const findProduct = getState().cart.cart.find(product => product.id === obj.id)

    if (findProduct) {
      const { data } = await axios.put(`http://localhost:3001/cart/${findProduct.id}`, {
        id: findProduct.id,
        imageUrl: findProduct.imageUrl,
        name: findProduct.name,
        sum: findProduct.sum+1,
        price: findProduct.price
      })

      return data
    } else {
      const { data } = await axios.post('http://localhost:3001/cart', obj)

      return data
    }
  }  
)

export const getProductsFromCart = createAsyncThunk<CartProduct[]>(
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

export const plusProductToCart = createAsyncThunk<CartProduct, number, { state: RootState }>(
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
      })
     
      return data
    }
  }
)

export const minusProductToCart = createAsyncThunk<CartProduct, number, { state: RootState }>(
  'cart/minusProductToCart',
  async (id, { getState }) => {
    const findProduct = getState().cart.cart.find(product => product.id === id)

    if (findProduct) {
      const { data } = await axios.put(`http://localhost:3001/cart/${id}`, { 
        id: id,
        imageUrl: findProduct.imageUrl,
        name: findProduct.name,
        sum: findProduct.sum-1,
        price: findProduct.price,
      })

      return data
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
    builder.addCase(addProductToCart.fulfilled, (state, action) => {
      const findProduct = state.cart.find(product => product.id === action.payload.id)

      if (findProduct) {
        findProduct.sum = findProduct.sum+1
      } else {
        state.cart.push(action.payload)
      }
    })
    builder.addCase(getProductsFromCart.fulfilled, (state, action) => {
      state.cart = action.payload
    })
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload)
    })
    builder.addCase(plusProductToCart.fulfilled, (state, action) => {
      const findProduct = state.cart.find(product => product.id === action.payload.id)


    })
    builder.addCase(minusProductToCart.fulfilled, (state, action) => {
      const findProduct = state.cart.find(product => product.id === action.payload.id)

      if (findProduct) {
        findProduct.sum = action.payload.sum
      }
    })
  }
})

export default cartSlice.reducer
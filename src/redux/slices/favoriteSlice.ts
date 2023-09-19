import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type FavoriteItem = {
  id: number
  imageUrl: string
  name: string
  price: number
}

type Favorite = {
  favorite: FavoriteItem[]
}

export const addToFavorite = createAsyncThunk<FavoriteItem[], FavoriteItem, { state: RootState }>(
  'favorite/addToFavorite',
  async (obj, { getState }) => {
    const findProduct = getState().favorite.favorite.find(product => product.id === obj.id)

    if (findProduct) return

    try {
      const { data } = await axios.post('http://localhost:3001/favorite', obj)

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const deleteProductFromFavorite = createAsyncThunk<number, number, { rejectValue: string }>(
  'favorite/deleteProductFromFavorite',
  async (id, { rejectWithValue }) => {
      const response = await axios.delete(`http://localhost:3001/favorite/${id}`)

      if (!response) {
        rejectWithValue('Some error')
      }

      return id
  }
)

export const getProductsFromFavorite = createAsyncThunk<FavoriteItem[]>(
  'favorite/getProductsFromFavorite',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/favorite')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const initialState: Favorite = {
  favorite: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsFromFavorite.fulfilled, (state, action) => {
      state.favorite = action.payload
    })
    builder.addCase(deleteProductFromFavorite.fulfilled, (state, action) => {
      state.favorite = state.favorite.filter(product => product.id !== action.payload)
    })
  },
})

export default favoriteSlice.reducer
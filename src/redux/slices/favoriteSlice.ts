import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type FavoriteItem = {
  id: number
  img: string
  name: string
  price: number
}

type Favorite = {
  favorite: FavoriteItem[]
}

export const addToFavorite = createAsyncThunk<FavoriteItem[], FavoriteItem, { rejectValue: string, state: RootState }>(
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
  },
})

export default favoriteSlice.reducer
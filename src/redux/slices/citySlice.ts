import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type City = {
  id: number
  city: string
}

type Cities = {
  cities: City[]
  mainCity: City[]
}

const initialState: Cities = {
  cities: [],
  mainCity: []
}

export const getCities = createAsyncThunk(
  'cities/getCities',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/cities')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getMainCity = createAsyncThunk(
  'cities/getMainCity',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/mainCity')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const changeMainCity = createAsyncThunk<City[], City>(
  'cities/changeMainCity',
  async (params) => {
    const { id, city } = params

    try {
      const { data } = await axios.put('http://localhost:3001/mainCity', [{ id: id, city: city }])

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const countrySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMainCity.fulfilled, (state, action) => {
      state.mainCity = action.payload
    })
    builder.addCase(getCities.fulfilled, (state, action) => {
      state.cities = action.payload
    })
    builder.addCase(changeMainCity.fulfilled, (state, action) => {
      state.mainCity = action.payload
    })
  }
})

export default countrySlice.reducer
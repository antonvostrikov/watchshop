import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const getCountries = createAsyncThunk(
  'cities/getCountries',
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

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.cities = action.payload
    })
    builder.addCase(getMainCity.fulfilled, (state, action) => {
      state.mainCity = action.payload
    })
  }
})

export default countrySlice.reducer
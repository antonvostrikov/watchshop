import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type City = {
  id: number
  city: string
}

type Cities = {
  cities: City[]
}

const initialState: Cities = {
  cities: []
}

export const getCountries = createAsyncThunk(
  'country/getCountries',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/cities')

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
  }
})

export default countrySlice.reducer
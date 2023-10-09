import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Country = {
  id: number
  country: string
}

type Countries = {
  countries: Country[]
}

const initialState: Countries = {
  countries: []
}

export const getCountries = createAsyncThunk(
  'country/getCountries',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/countries')

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
      state.countries = action.payload
    })
  }
})

export default countrySlice.reducer
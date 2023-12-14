import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ICity, ICityState } from '../../interfaces/city.interface'

const initialState: ICityState = {
  mainCity: [],
  cities: []
}

export const getMainCity = createAsyncThunk<ICity[]>(
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
  }
})

export default countrySlice.reducer
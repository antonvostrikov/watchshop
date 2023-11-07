import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type FiltersItems = {
  id: number
  filter: string
}

type Sort = {
  wristBrandsFilter: FiltersItems[]
  premiumBrandsFilter: FiltersItems[]
  wristCountriesFilter: FiltersItems[]
  premiumCountriesFilter: FiltersItems[]
  sexSort: FiltersItems[]
}

const initialState: Sort = {
  sexSort: [
    { "id": 1, "filter": "Мужские" },
    { "id": 2, "filter": "Женские" }
  ],
  wristBrandsFilter: [],
  premiumBrandsFilter: [],
  wristCountriesFilter: [],
  premiumCountriesFilter: []
}

export const getWristBrandsFilter = createAsyncThunk(
  'filter/getWristBrandsFilter',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/wristBrandsFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getPremiumBrandsFilter = createAsyncThunk(
  'filter/getPremiumBrandsFilter',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/premiumBrandsFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getWristCountriesFilter = createAsyncThunk(
  'filter/getWristCountriesFilter', 
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/wristCountriesFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getPremiumCountriesFilter = createAsyncThunk(
  'filter/getPremiumCountriesFilter', 
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/premiumCountriesFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWristBrandsFilter.fulfilled, (state, action) => {
      state.wristBrandsFilter = action.payload
    })
    builder.addCase(getWristCountriesFilter.fulfilled, (state, action) => {
      state.wristCountriesFilter = action.payload
    })
    builder.addCase(getPremiumBrandsFilter.fulfilled, (state, action) => {
      state.premiumBrandsFilter = action.payload
    })
    builder.addCase(getPremiumCountriesFilter.fulfilled, (state, action) => {
      state.premiumCountriesFilter = action.payload
    })
  }
})

export default filterSlice.reducer
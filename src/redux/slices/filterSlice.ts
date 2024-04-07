import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { ISort } from "../../interfaces/filter.interface";

const initialState: ISort = {
  sexSort: [
    { "id": 1, "filter": "Мужские" },
    { "id": 2, "filter": "Женские" }
  ],
  sexSortAccessories: [
    { "id": 1, "filter": "Мужской" },
    { "id": 2, "filter": "Женский" }
  ],
  wristBrandsFilter: [],
  premiumBrandsFilter: [],
  wristCountriesFilter: [],
  premiumCountriesFilter: [],
  beltsBrandsFilter: [],
  beltsColorsFilter: [],
  beltsMaterialsFilter: [],
  coversBrandsFilter: [],
  coversColorsFilter: [],
  coversMaterialsFilter: []
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

export const getBrandsCoversFilter = createAsyncThunk(
  'filter/getBrandsCoversFilter',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/coversBrandsFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getColorsCoversFilter = createAsyncThunk(
  'filter/getColorsCoversFilter',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/coversColorsFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getMaterialsCoversFilter = createAsyncThunk(
  'filter/getMaterialsCoversFilter',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/coversMaterialsFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getBrandsBeltsFilter = createAsyncThunk(
  'filter/getBrandsBeltsFilter',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/beltsBrandsFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getColorsBeltsFilter = createAsyncThunk(
  'filter/getColorsBeltsFilter',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/beltsColorsFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getMaterialsBeltsFilter = createAsyncThunk(
  'filter/getMaterialsBeltsFilter',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/beltsMaterialsFilter')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
  },
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
    builder.addCase(getBrandsCoversFilter.fulfilled, (state, action) => {
      state.coversBrandsFilter = action.payload
    })
    builder.addCase(getColorsCoversFilter.fulfilled, (state, action) => {
      state.coversColorsFilter = action.payload
    })
    builder.addCase(getMaterialsCoversFilter.fulfilled, (state, action) => {
      state.coversMaterialsFilter = action.payload
    })
    builder.addCase(getBrandsBeltsFilter.fulfilled, (state, action) => {
      state.beltsBrandsFilter = action.payload
    })
    builder.addCase(getColorsBeltsFilter.fulfilled, (state, action) => {
      state.beltsColorsFilter = action.payload
    })
    builder.addCase(getMaterialsBeltsFilter.fulfilled, (state, action) => {
      state.beltsMaterialsFilter = action.payload
    })
  }
})

export default filterSlice.reducer
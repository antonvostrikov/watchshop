import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../store";

type imageSlider = {
  img: string
}

type Watch = {
  id: number
  sex: string
  brand: string
  name: string
  price: number
  imageUrl: string
  description: string
  country: string
  model: string
  type: string
  dial: string
  band: string
  waterproof: string
  dimensions: string
  typeWatch: string
  sliderImages: imageSlider[],
  rating: number
}

type Watches = {
  watches: Watch[]
  premiumWatches: Watch[]
  brand: Watch[]
  status: string
}

type Filter = {
  id: number
  filter: string
}

const initialState: Watches = {
  watches: [],
  premiumWatches: [],
  brand: [],
  status: "pending"
}

type RequireAllWatches = {
  brandsFilter: Filter[]
  countriesFilter: Filter[]
  sexFilter: Filter[]
  sortBy: string
  order: string
  minPrice: number
  maxPrice: number
}

type RequireBrandWatches = {
  brandPage: string
  sexFilter: Filter[]
  minPrice: number
  maxPrice: number
  sortBy: string
  order: string
}

export const getAllWatches = createAsyncThunk<Watch[], RequireAllWatches, { state: RootState }>(
  'watches/getAllWatches',
  async (params) => {
    const { brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice } = params

    const brandsList: string[] = []
    const countriesList: string[] = []
    const sexList: string[] = []

    brandsFilter.map(brand => brandsList.push(brand.filter))
    countriesFilter.map(country => countriesList.push(country.filter))
    sexFilter.map(sex => sexList.push(sex.filter))
    
    const brand = brandsList.length === 0 ? '' : `&brand=${brandsList.join('&brand=')}`
    const country = countriesList.length === 0 ? '' : `&country=${countriesList.join('&country=')}`
    const sex = sexFilter.length === 0 ? '' : `&sex=${sexList.join('&sex=')}`
    const min = minPrice === 0 ? '' : `&price_gte=${minPrice}`
    const max = maxPrice === 0 ? '' : `&price_lte=${maxPrice}`

    try {
      const { data } = await axios.get(`http://localhost:3001/wristWatches?${brand}${country}${sex}&_sort=${sortBy}&_order=${order}${min}${max}`)
      
      return data
    } catch (e) {
      console.log('Не удалось получить данные')
    }
  }
)

export const getPremiumWatches = createAsyncThunk<Watch[], RequireAllWatches>(
  'watches/getPremiumWatches',
  async (params) => {
    const { brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice } = params

    const brandsList: string[] = []
    const countriesList: string[] = []
    const sexList: string[] = []

    brandsFilter.map(brand => brandsList.push(brand.filter))
    countriesFilter.map(country => countriesList.push(country.filter))
    sexFilter.map(sex => sexList.push(sex.filter))
    
    const brand = brandsList.length === 0 ? '' : `&brand=${brandsList.join('&brand=')}`
    const country = countriesList.length === 0 ? '' : `&country=${countriesList.join('&country=')}`
    const sex = sexList.length === 0 ? '' : `&sex=${sexList.join('&sex=')}`
    const min = minPrice === 0 ? '' : `&price_gte=${minPrice}`
    const max = maxPrice === 0 ? '' : `&price_lte=${maxPrice}`

    try {
      const { data } = await axios.get(`http://localhost:3001/wristWatches?typeWatch=premium${brand}${country}${sex}&_sort=${sortBy}&_order=${order}${min}${max}`)

      return data
    } catch (e) {
      console.log('Не удалось получаить данные')
    }
  }
)

export const getBrandWatches = createAsyncThunk<Watch[], RequireBrandWatches>(
  'watches/getBrandWatches', 
  async (params) => {
    const { brandPage, sexFilter, minPrice, maxPrice, sortBy, order } = params

    const sexList: string[] = []

    sexFilter.map(sex => sexList.push(sex.filter))

    const sex = sexList.length === 0 ? '' : `&sex=${sexList.join('&sex=')}`
    const min = minPrice === 0 ? '' : `&price_gte=${minPrice}`
    const max = maxPrice === 0 ? '' : `&price_lte=${maxPrice}`

    try {
      const { data } = await axios.get(`http://localhost:3001/wristWatches?brand=${brandPage}${sex}&_sort=${sortBy}&_order=${order}${min}${max}`)

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const getWatchesSlice = createSlice({
  initialState,
  name: "watches",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllWatches.fulfilled, (state, action) => {
      state.watches = action.payload
      state.status = "fulfielled"
    })
    builder.addCase(getAllWatches.pending, (state) => {
      state.watches = []
      state.status = "pending"
    })
    builder.addCase(getAllWatches.rejected, (state, action) => {
      state.watches = []
      state.status = "rejected"
    }) 
    builder.addCase(getPremiumWatches.fulfilled, (state, action) => {
      state.premiumWatches = action.payload
      state.status = "fulfielled"
    })
    builder.addCase(getPremiumWatches.pending, (state) => {
      state.premiumWatches = []
      state.status = "pending"
    })
    builder.addCase(getPremiumWatches.rejected, (state) => {
      state.premiumWatches = []
      state.status = "rejected"
    })
    builder.addCase(getBrandWatches.fulfilled, (state, action) => {
      state.brand = action.payload
      state.status = "fulfilled"
    })
  }
})

export default getWatchesSlice.reducer
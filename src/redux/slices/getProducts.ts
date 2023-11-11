import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

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
  country?: string
  model: string
  type?: string
  dial?: string
  band?: string
  waterproof?: string
  dimensions: string
  categoryType: string
  sliderImages?: imageSlider[],
  rating?: number
  color?: string
  material?: string
}

type Watches = {
  products: Watch[]
  status: string
}

type Filter = {
  id: number
  filter: string
}

const initialState: Watches = {
  products: [],
  status: "pending"
}

type RequireAllWatches = {
  brandPage?: string
  brandsFilter?: Filter[]
  countriesFilter?: Filter[]
  sexFilter?: Filter[]
  sortBy: string
  order: string
  minPrice: number
  maxPrice: number
}

export const getProducts = createAsyncThunk<Watch[], RequireAllWatches>(
  'watches/getProducts',
  async (params) => {
    const { brandsFilter, countriesFilter, sexFilter, sortBy, order, minPrice, maxPrice } = params

    const brandsList: string[] = []
    const countriesList: string[] = []
    const sexList: string[] = []

    brandsFilter && brandsFilter.map(brand => brandsList.push(brand.filter))
    countriesFilter && countriesFilter.map(country => countriesList.push(country.filter))
    sexFilter && sexFilter.map(sex => sexList.push(sex.filter))
    
    const brand = brandsList.length === 0 ? '' : `&brand=${brandsList.join('&brand=')}`
    const country = countriesList.length === 0 ? '' : `&country=${countriesList.join('&country=')}`
    const sex = sexList.length === 0 ? '' : `&sex=${sexList.join('&sex=')}`
    const min = minPrice === 0 ? '' : `&price_gte=${minPrice}`
    const max = maxPrice === 0 ? '' : `&price_lte=${maxPrice}`
    
    try {
      const { data } = await axios.get(`http://localhost:3001/products?${brand}${country}${sex}&_sort=${sortBy}&_order=${order}${min}${max}`)
      
      return data
    } catch (e) {
      console.log('Не удалось получить данные')
    }
  }
)

const getWatchesSlice = createSlice({
  initialState,
  name: "watches",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.status = "fulfielled"
    })
    builder.addCase(getProducts.pending, (state) => {
      state.products = []
      state.status = "pending"
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.products = []
      state.status = "rejected"
    }) 
  }
})

export default getWatchesSlice.reducer
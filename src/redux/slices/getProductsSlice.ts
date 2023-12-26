import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import {RequireAllProducts, IProduct, IProducts} from '../../interfaces/product.interface'

const initialState: IProducts = {
  products: [],
  product: [],
  status: "pending"
}

export const getProductsInitial = createAsyncThunk<IProduct[]>(
  'products/getProductsInitial',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/products')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

export const getProducts = createAsyncThunk<IProduct[], RequireAllProducts>(
  'products/getProducts',
  async (params) => {
    const { brandsFilter, countriesFilter, colorsFilter, materialsFilter, sexFilter, sortBy, order, minPrice, maxPrice } = params

    const materialsList: string[] = []
    const colorsList: string[] = []
    const brandsList: string[] = []
    const countriesList: string[] = []
    const sexList: string[] = []

    materialsFilter && materialsFilter.map(material => materialsList.push(material.filter))
    colorsFilter && colorsFilter.map(color => colorsList.push(color.filter))
    brandsFilter && brandsFilter.map(brand => brandsList.push(brand.filter))
    countriesFilter && countriesFilter.map(country => countriesList.push(country.filter))
    sexFilter && sexFilter.map(sex => sexList.push(sex.filter))
    
    const material = materialsList.length === 0 ? '' : `&material=${materialsList.join('&material=')}`
    const color = colorsList.length === 0 ? '' : `&color=${colorsList.join('&color=')}`
    const brand = brandsList.length === 0 ? '' : `&brand=${brandsList.join('&brand=')}`
    const country = countriesList.length === 0 ? '' : `&country=${countriesList.join('&country=')}`
    const sex = sexList.length === 0 ? '' : `&sex=${sexList.join('&sex=')}`
    const min = minPrice === 0 ? '' : `&price_gte=${minPrice}`
    const max = maxPrice === 0 ? '' : `&price_lte=${maxPrice}`
  
    try {
      const { data } = await axios.get(`http://localhost:3001/products?${brand}${country}${sex}&_sort=${sortBy}&_order=${order}${min}${max}${material}${color}`)
      
      return data
    } catch (e) {
      console.log('Не удалось получить данные')
    }
  }
)

export const getProduct = createAsyncThunk<IProduct, number>(
  'products/getProduct',
  async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/products/${id}`)

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const getProductsSlice = createSlice({
  initialState,
  name: "products",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
      state.status = "fulfilled"
    })
    builder.addCase(getProducts.pending, (state) => {
      state.products = []
      state.status = "pending"
    })
    builder.addCase(getProducts.rejected, (state, action) => {
      state.products = []
      state.status = "rejected"
    }) 
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = []
      state.product.push(action.payload)
    })
    builder.addCase(getProductsInitial.fulfilled, (state, action) => {
      state.products = action.payload
    })
  }
})

export default getProductsSlice.reducer
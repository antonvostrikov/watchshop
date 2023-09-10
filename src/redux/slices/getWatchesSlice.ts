import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

type imageSlider = {
  img: string
}

type Watch = {
  id: number,
  sex: string,
  name: string,
  price: number,
  imageUrl: string,
  description: string,
  country: string,
  model: string,
  type: string,
  dial: string,
  band: string,
  waterproof: string,
  dimensions: string,
  typeWatch: string,
  sliderImages: imageSlider[]
}

type Watches = {
  watches: Watch[],
  status: string
}

const initialState: Watches = {
  watches: [],
  status: "pending"
}

export const getAllWatches = createAsyncThunk<Watch[]>(
  'watches/getAllWatches',
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/wristWatches')

      return response.data
    } catch (e) {
      console.log('Не удалось получить данные')
    }
  }
)

export const getPremiumWatches = createAsyncThunk<Watch[]>(
  'watches/getPremiumWatches',
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/wristWatches?typeWatch=premium')

      return response.data
    } catch (e) {
      console.log('Не удалось получаить данные')
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
      state.status = "fullfilled"
    })
    builder.addCase(getAllWatches.pending, (state) => {
      state.watches = []
      state.status = "pending"
    })
    builder.addCase(getAllWatches.rejected, (state) => {
      state.watches = []
      state.status = "rejected"
    }) 
    builder.addCase(getPremiumWatches.fulfilled, (state, action) => {
      state.watches = action.payload
      state.status = "fullfilled"
    })
    builder.addCase(getPremiumWatches.pending, (state, action) => {
      state.watches = []
      state.status = "pending"
    })
    builder.addCase(getPremiumWatches.rejected, (state, action) => {
      state.watches = []
      state.status = "rejected"
    })
  }
})

export default getWatchesSlice.reducer
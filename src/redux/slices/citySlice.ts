import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type City = {
  id: number
  city: string
}

const initialState: City = {
  id: 1,
  city: 'Москва'
}

const countrySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
})

export default countrySlice.reducer
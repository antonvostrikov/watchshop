import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

import { ICity } from '../../interfaces/city.interface'

const initialState: ICity = {
  id: 1,
  city: 'Москва'
}

const countrySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
})

export default countrySlice.reducer
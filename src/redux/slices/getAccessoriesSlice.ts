import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type AccessoriesName = {
  id: number
  name: string
  type: string
  count: number
}

type AccessoriesState = {
  accessoriesName: AccessoriesName[]
  status: string
}

const initialState: AccessoriesState = {
  accessoriesName: [],
  status: 'pending'
}

export const getAccessoriesName = createAsyncThunk<AccessoriesName[]>(
  'accessories/getAccessoriesName',
  async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/accessoriesName')

      return data
    } catch (e) {
      console.log(e)
    }
  }
)

const getAccessoriesSlice = createSlice({
  name: 'accessories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccessoriesName.fulfilled, (state, action) => {
      state.accessoriesName = action.payload
    })
  }
})

export default getAccessoriesSlice.reducer
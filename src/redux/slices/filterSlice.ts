import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterSort = {
  name: string
  sortProperty: string
}

type Sort = {
  sort: FilterSort
}

const initialState: Sort = {
  sort: {
    name: 'По популярности',
    sortProperty: 'rating'
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<FilterSort>) {
      state.sort = action.payload
    }
  }
})

export default filterSlice.reducer
export const { setSort } = filterSlice.actions
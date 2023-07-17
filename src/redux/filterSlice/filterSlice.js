import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    setFilter(state, action) {
      return { ...state, filter: action.payload };
    },
  },
});

export const setFilterSlice = filterSlice.actions.setFilter;
export const filterReducerSlice = filterSlice.reducer;
// Selector
export const getFilters = state => state.filter.filter;

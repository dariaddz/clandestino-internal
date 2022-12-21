import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token.token;

        state.userName = action.payload.token.userName;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => state),
});

export const authReducer = authSlice.reducer;

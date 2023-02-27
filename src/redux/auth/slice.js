import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, fetchCurrentUser } from './operations';
import { toast } from 'react-toastify';

const resetToInitialState = state => {
  state.userName = null;
  state.token = null;
  state.isLoggedIn = false;
  state.isPending = false;
  state.isFetchingCurrentUser = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userName: null,
    token: null,
    admin: false,
    isLoggedIn: false,
    isPending: false,
    isFetchingCurrentUser: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.pending, (state, action) => {
        state.isPending = true;
        toast.success('ищем музыку для вас');
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userName = action.payload.user.userName;
        state.isLoggedIn = true;
        state.isPending = false;
      })
      .addCase(logIn.rejected, (state, action) => resetToInitialState(state))
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isPending = true;
        state.isLoggedIn = false;
        state.token = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        resetToInitialState(state);
      })
      .addCase(logOut.fulfilled, state => {
        resetToInitialState(state);
      })
      .addCase(logOut.pending, state => {
        state.isPending = true;
      }),
});

export const authReducer = authSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { musicApi } from './musicApi';

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    [musicApi.reducerPath]: musicApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    musicApi.middleware,
  ],
});

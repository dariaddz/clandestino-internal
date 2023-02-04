import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL =
//   'https://clandestino-internal-back.onrender.com/api/auth/';
axios.defaults.baseURL = 'http://localhost:8090/api/auth/';

//   add JWT
const setAuthHeader = token => {
  console.log('token from setAuthHeader', token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//   remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('login', credentials);
      setAuthHeader(res.data.token.token);
      console.log('res.data login', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

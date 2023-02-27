import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

axios.defaults.baseURL =
  'https://clandestino-internal-back.onrender.com/api/auth/';
// axios.defaults.baseURL = 'http://localhost:8090/api/auth/';

// //   add JWT
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `${token}`;
//   console.log('token from setAuthHeader', token);
// };

// //   remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('login', credentials);

      console.log('data while login', res.data.user);
      console.log('token while login', res.data.user.token);

      token.set(res.data.user.token);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    console.log('token', token);
    if (!token) {
      return thunkAPI.rejectWithValue('no valid token');
    }

    console.log('token var');
    token.set(token);
    try {
      const res = await axios.get('current');
      console.log('data from fetchCurrent usr', res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    //   const persistedToken = state.auth.token;
    //   if (persistedToken === null) {
    //     return thunkAPI.rejectWithValue();
    //   }
    //   token.set(persistedToken);
    //   try {
    //     const { data } = await axios.get('/users/current');
    //     return data;
    //   } catch (error) {}
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

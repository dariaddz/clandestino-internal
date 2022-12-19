// import Axios from 'axios';

// Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

// export async function fetchMusic() {
//   const response = await Axios.get(`/photos`);
//   return response.data;
// }

//rtk query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Music'],
  endpoints: builder => ({
    getMusic: builder.query({
      query: () => ({
        url: `/photos`,
        method: 'GET',
      }),
      providesTags: ['Music'],
    }),
  }),
});

export const { useGetMusicQuery } = musicApi;

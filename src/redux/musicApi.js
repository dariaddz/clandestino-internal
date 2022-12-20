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
    // baseUrl: 'https://jsonplaceholder.typicode.com/',
    baseUrl: 'https://63a1848be3113e5a5c57ea31.mockapi.io/',
  }),
  tagTypes: ['Music'],
  endpoints: builder => ({
    getMusic: builder.query({
      query: () => ({
        url: `/musics`,
        method: 'GET',
      }),
      providesTags: ['Music'],
    }),

    addMusic: builder.mutation({
      query: ({ musicName }) => ({
        url: `/musics`,
        method: 'POST',
        body: { musicName: musicName },
      }),
      invalidatesTags: ['Music'],
    }),

    archiveMusic: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/musics/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Music'],
    }),
  }),
});

export const {
  useGetMusicQuery,
  useAddMusicMutation,
  useArchiveMusicMutation,
} = musicApi;

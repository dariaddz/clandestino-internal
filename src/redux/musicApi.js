//rtk query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const musicApi = createApi({
  reducerPath: 'musicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/api/music/',
    // baseUrl: 'https://clandestino-internal-back.onrender.com/api/music',
  }),
  tagTypes: ['Music'],
  endpoints: builder => ({
    getMusic: builder.query({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      providesTags: ['Music'],
    }),

    getMusicById: builder.query({
      query: id => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: ['Music'],
    }),

    // addMusic: builder.mutation({
    //   query: ({ musicName }) => ({
    //     url: `/musics`,
    //     method: 'POST',
    //     body: { musicName: musicName },
    //   }),
    //   invalidatesTags: ['Music'],
    // }),

    // archiveMusic: builder.mutation({
    //   query: ({ id, ...patch }) => ({
    //     url: `/musics/${id}`,
    //     method: 'PATCH',
    //     body: patch,
    //   }),
    //   invalidatesTags: ['Music'],
    // }),
  }),
});

export const {
  useGetMusicQuery,
  useGetMusicByIdQuery,
  // useAddMusicMutation,
  // useArchiveMusicMutation,
} = musicApi;

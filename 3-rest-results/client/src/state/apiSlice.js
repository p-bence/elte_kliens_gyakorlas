import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),
  reducerPath: "api",
  tagTypes: ["Results"],
  endpoints: (builder) => ({
    getResults: builder.query({
      query: () => "/results", // vagy () => ({url: "..."})
      transformResponse: (res) => res.data,
      providesTags: ["Results"],
    }),
    getResultById: builder.query({
      query: (id) => "/results/" + id,
    }),
    createResult: builder.mutation({
      query: (body) => ({
        url: "/results",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Results"],
    }),
    updateResult: builder.mutation({
      query: ({ id, body }) => ({
        url: "/results/" + id,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Results"],
    }),
    removeResult: builder.mutation({
      query: (id) => ({
        url: "/results/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["Results"],
    }),
  }),
});

export const {
  useGetResultsQuery,
  useGetResultByIdQuery,
  useCreateResultMutation,
  useUpdateResultMutation,
  useRemoveResultMutation,
} = api;

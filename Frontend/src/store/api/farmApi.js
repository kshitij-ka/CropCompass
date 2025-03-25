import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const farmApi = createApi({
  reducerPath: "farmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/farm",
    credentials: "include",
  }),
  tagTypes: ["Farms"],
  endpoints: (builder) => ({
    getFarms: builder.query({
      query: () => "/",
      providesTags: ["Farms"],
    }),
    getFarmById: builder.query({
      query: (farmId) => `/${farmId}`,
      providesTags: ["Farms"],
    }),
    createFarm: builder.mutation({
      query: (newFarm) => ({
        url: "/",
        method: "POST",
        body: newFarm,
        credentials: "include",
      }),
      invalidatesTags: ["Farms"],
    }),
    updateFarm: builder.mutation({
      query: ({ farmId, updatedFarm }) => ({
        url: `/${farmId}`,
        method: "PUT",
        body: updatedFarm,
        credentials: "include",
      }),
      invalidatesTags: (result, error, { farmId }) => [
        { type: "Farms", id: farmId },
      ],
    }),
    deleteFarm: builder.mutation({
      query: (farmId) => ({
        url: `/${farmId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Farms"],
    }),
  }),
});

export const {
  useGetFarmsQuery,
  useGetFarmByIdQuery,
  useCreateFarmMutation,
  useUpdateFarmMutation,
  useDeleteFarmMutation,
} = farmApi;

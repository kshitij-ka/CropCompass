import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = import.meta.env.VITE_API_URL;

export const cropApi = createApi({
  reducerPath: "cropApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URI}/api/v1/crop`,
    credentials: "include", // Ensures credentials (cookies, tokens) are included
  }),
  tagTypes: ["Crops"],
  endpoints: (builder) => ({
    getCropsByFarm: builder.query({
      query: (farmId) => `/farm/${farmId}`,
      providesTags: ["Crops"],
    }),
    getCropById: builder.query({
      query: (cropId) => `/${cropId}`,
      providesTags: (result, error, cropId) => [{ type: "Crops", id: cropId }],
    }),
    createCrop: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Crops"],
    }),
    updateCrop: builder.mutation({
      query: ({ cropId, updatedCrop }) => ({
        url: `/${cropId}`,
        method: "PUT",
        body: updatedCrop,
      }),
      invalidatesTags: (result, error, { cropId }) => [
        { type: "Crops", id: cropId },
      ],
    }),
    deleteCrop: builder.mutation({
      query: (cropId) => ({
        url: `/${cropId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Crops"],
    }),
    updateHealthStatus: builder.mutation({
      query: ({ cropId, healthStatus }) => ({
        url: `/health/${cropId}`,
        method: "PUT",
        body: { healthStatus },
      }),
      invalidatesTags: (result, error, { cropId }) => [
        { type: "Crops", id: cropId },
      ],
    }),
    updateGrowthStage: builder.mutation({
      query: ({ cropId, growthStage }) => ({
        url: `/growth/${cropId}`,
        method: "PUT",
        body: { growthStage },
      }),
      invalidatesTags: (result, error, { cropId }) => [
        { type: "Crops", id: cropId },
      ],
    }),
    cropHarvest: builder.query({
      query: (cropId) => `/harvest/${cropId}`,
    }),
    suggestNextCrop: builder.query({
      query: (cropId) => `/nextCrop/${cropId}`,
    }),
    suggestPesticides: builder.query({
      query: (cropId) => `/pesticides/${cropId}`,
    }),
    suggestFertilizers: builder.query({
      query: (cropId) => `/fertilizers/${cropId}`,
    }),
  }),
});

export const {
  useGetCropsByFarmQuery,
  useGetCropByIdQuery,
  useCreateCropMutation,
  useUpdateCropMutation,
  useDeleteCropMutation,
  useUpdateHealthStatusMutation,
  useUpdateGrowthStageMutation,
  useCropHarvestQuery,
  useSuggestNextCropQuery,
  useSuggestPesticidesQuery,
  useSuggestFertilizersQuery,
} = cropApi;

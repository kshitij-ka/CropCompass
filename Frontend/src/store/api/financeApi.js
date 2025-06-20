import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URI = import.meta.env.VITE_API_URL;

export const financeApi = createApi({
  reducerPath: "financeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URI}/api/v1/finance`,
    credentials: "include",
  }),
  tagTypes: ["Finance", "Transactions"],
  endpoints: (builder) => ({
    getFinanceByFarm: builder.query({
      query: (farmId) => `/${farmId}`,
      providesTags: ["Finance"],
    }),
    getTransactions: builder.query({
      query: (financeId) => `/transactions/${financeId}`,
      providesTags: ["Transactions"],
    }),
    getFinancialSummary: builder.query({
      query: (financeId) => `/summary/${financeId}`,
      providesTags: ["Finance"],
    }),
    createFinance: builder.mutation({
      query: (financeData) => ({
        url: "/",
        method: "POST",
        body: financeData,
      }),
      invalidatesTags: ["Finance"],
    }),
    deleteTransaction: builder.mutation({
      query: (financeId) => ({
        url: `/${financeId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Transactions", "Finance"],
    }),
    addTransaction: builder.mutation({
      query: ({ financeId, transactionData }) => ({
        url: `/${financeId}/transaction`,
        method: "POST",
        body: transactionData,
      }),
      invalidatesTags: ["Transactions", "Finance"],
    }),
  }),
});

export const {
  useGetFinanceByFarmQuery,
  useGetTransactionsQuery,
  useGetFinancialSummaryQuery,
  useCreateFinanceMutation,
  useDeleteTransactionMutation,
  useAddTransactionMutation,
} = financeApi;

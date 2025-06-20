import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URI = import.meta.env.VITE_API_URL;

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URI}/api/v1/task`,
    credentials: "include",
  }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasksByFarm: builder.query({
      query: (farmId) => `/farm/${farmId}`,
      providesTags: ["Tasks"],
    }),
    getTaskById: builder.query({
      query: (taskId) => `/${taskId}`,
      providesTags: (result, error, taskId) => [{ type: "Tasks", id: taskId }],
    }),
    createTask: builder.mutation({
      query: (taskData) => ({
        url: "/",
        method: "POST",
        body: taskData,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ taskId, updatedTask }) => ({
        url: `/${taskId}`,
        method: "PUT",
        body: updatedTask,
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: "Tasks", id: taskId },
      ],
    }),
    updateTaskStatus: builder.mutation({
      query: ({ taskId, status }) => ({
        url: `/${taskId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: (result, error, { taskId }) => [
        { type: "Tasks", id: taskId },
      ],
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksByFarmQuery,
  useGetTaskByIdQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useUpdateTaskStatusMutation,
  useDeleteTaskMutation,
} = taskApi;

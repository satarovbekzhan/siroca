import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API || "http://192.168.3.5:5666/api",
  }),
  tagTypes: [],
  reducerPath: "api",
  keepUnusedDataFor: 5 * 60,
  endpoints: () => ({}),
});

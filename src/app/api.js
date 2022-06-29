import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export default createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API }),
  tagTypes: [],
  reducerPath: "api",
  keepUnusedDataFor: 5 * 60,
  endpoints: () => ({}),
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITaxesResponse } from '@utils/interfaces';
import { apiUrl } from '@utils/config';
/**
 * Main API service.
 */
const taxesService = createApi({
  reducerPath: 'taxesApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ['Taxes'],
  endpoints: (build) => ({
    getTaxesBrackets: build.query<ITaxesResponse, number>({
      query: (year = 2022) => ({
        url: `/tax-calculator/tax-year/${year}`
      }),
      providesTags: () => ['Taxes']
    })
  })
});

export { taxesService };

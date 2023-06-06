import * as process from 'process'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: () => ({}),
})

//https://redux-toolkit.js.org/rtk-query/usage/code-splitting

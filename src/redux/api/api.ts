import * as process from 'process'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {loadLocalStorage} from 'lib/LocalStorage/LocalStorage'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl,
        credentials: 'include',
        prepareHeaders: headers => {
            const accessToken = loadLocalStorage()

            if (accessToken) {
                headers.set('authorization', `Bearer ${JSON.parse(accessToken)}`)
            }

            return headers
        },
    }),
    endpoints: () => ({}),
})

//https://redux-toolkit.js.org/rtk-query/usage/code-splitting

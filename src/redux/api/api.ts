import * as process from 'process'
import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from '@reduxjs/toolkit/query/react'
import {loadLocalStorage, saveLocalStorage} from 'lib/LocalStorage/LocalStorage'
import {PATH} from 'common/constant/PATH'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: 'include',
    prepareHeaders: headers => {
        const accessToken = loadLocalStorage()

        if (accessToken) {
            headers.set('authorization', `Bearer ${JSON.parse(accessToken)}`)
        }
        return headers
    },
})

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = (await baseQuery(
            {
                url: PATH.UPDATE_TOKENS,
                method: 'POST',
            },
            api,
            extraOptions
        )) as {data: {accessToken: string}}

        if (refreshResult.data.accessToken) {
            await saveLocalStorage({accessToken: refreshResult.data.accessToken as string})

            // retry the initial query
            result = await baseQuery(args, api, extraOptions)
        } else {
            await baseQuery(
                {
                    url: PATH.LOG_OUT,
                    method: 'POST',
                },
                api,
                extraOptions
            )
        }
    }
    return result
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
})

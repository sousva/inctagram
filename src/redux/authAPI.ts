import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseURL} from 'common/api'
import {ForgotPasswordArgType, SignUpArgType} from './authAPITypes'

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: baseURL, credentials: 'include'}),
    endpoints: build => ({
        addNewUser: build.mutation<SignUpArgType, SignUpArgType>({
            query: body => ({
                url: `auth/registration`,
                method: 'POST',
                body,
            }),
        }),
        forgotPassword: build.mutation<any, ForgotPasswordArgType>({
            query: body => ({
                url: 'auth/password-recovery',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {useAddNewUserMutation, useForgotPasswordMutation} = authAPI

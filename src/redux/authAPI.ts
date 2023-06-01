import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {baseURL} from '../common/api'

type SignUpRequestType = {
    userName: string
    email: string
    password: string
}
type SignUpResponseType = {
    statusCode: number
    messages: [
        {
            message: string
            field: string
        }
    ]
    error: string
}
export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: build => ({
        addNewUser: build.mutation<SignUpResponseType, SignUpRequestType>({
            query: body => ({
                url: `auth/registration`,
                method: 'POST',
                body,
            }),
        }),
        forgotPassword: build.mutation<void, ForgotPasswordArgType>({
            query: body => ({
                url: 'auth/password-recovery',
                method: 'POST',
                body,
            }),
        }),
        newPassword: build.mutation<void, NewPasswordArgType>({
            query: body => ({
                url: 'auth/new-password',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const {useAddNewUserMutation} = authAPI

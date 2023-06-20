import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import {PATH} from 'app/path'
import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
        CredentialsProvider({
            credentials: {
                email: {label: 'email', type: 'email', placeholder: 'email'},
                password: {label: 'Password', type: 'password'},
            },
            id: 'credentials',
            name: 'credentials',
            async authorize(credentials, req) {
                try {
                    const loginResponse = await login(credentials!.email, credentials!.password)

                    const userResponse = await instance.get<{userId: number; userName: string; email: string}>(
                        'auth/me',
                        {withCredentials: true, headers: {Authorization: `Bearer ${loginResponse}`}}
                    )

                    const userData = userResponse.data
                    if (userData) {
                        return userData
                    }

                    return null
                } catch (e) {
                    console.log(e)
                    return null
                }
            },
        }),
    ],
    debug: process.env.NODE_ENV !== 'production',
    pages: {
        signIn: PATH.LOGIN,
        error: PATH.LOGIN,
        newUser: PATH.PROFILE_SETTINGS,
    },
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            return true
        },
        // async redirect({url, baseUrl}) {
        //     return baseUrl
        // },
        async session({session, user, token}) {
            return session
        },
        async jwt({token, user, account, profile, isNewUser}) {
            return token
        },
    },
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
})
export {handler as GET, handler as POST}

const login = async (email: string, password: string) => {
    console.log('loginfunction')
    try {
        const res = await instance.post<{email: string; password: string}, {data: {accessToken: string}}>(
            'auth/login',
            {
                email,
                password,
            }
        )
        const token = res.data.accessToken
        if (token) {
            return token
        }
        return null
    } catch (e) {
        console.log(e)
        return null
    }

    //
}

export const instance = axios.create({
    baseURL,
    withCredentials: true,
})

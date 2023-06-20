import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import {PATH} from 'app/path'
import axios from 'axios'
import {ACCESS_TOKEN, saveLocalStorage} from 'lib/LocalStorage/LocalStorage'

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
                const res = await login(credentials!.email, credentials!.password)

                if (res) {
                    return res
                }

                return null
            },
        }),
    ],
    pages: {
        signIn: PATH.LOGIN,
        error: PATH.LOGIN,
        newUser: PATH.PROFILE_SETTINGS,
    },
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            return true
        },
        async redirect({url, baseUrl}) {
            return baseUrl
        },
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

    const token = await instance.post<{email: string; password: string}, {accessToken: string}>('auth/login', {
        email,
        password,
    })
    await saveLocalStorage({accessToken: token.accessToken})
    const user = await instance.get<{userId: number; userName: string; email: string}>('auth/me')

    if (user) {
        return user
    }
    return null
}

export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
    withCredentials: true,
})
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem(ACCESS_TOKEN)

        if (token) {
            config.headers.Authorization = 'Bearer ' + token
        }

        return config
    },
    error => Promise.reject(error)
)

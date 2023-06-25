import NextAuth, {NextAuthOptions, User} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import {PATH} from 'app/path'
import {serverAuthAPI} from 'lib/server-api/server-api'

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    debug: process.env.NODE_ENV !== 'production',
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string,
    pages: {
        signIn: PATH.LOGIN,
        error: PATH.LOGIN,
        newUser: PATH.PROFILE_SETTINGS,
    },
    callbacks: {
        async signIn({user, account, profile, email, credentials}) {
            return true
        },
        async session({session, user, token}) {
            session.user = token as any
            return session
        },
        async jwt({token, user, account, profile, isNewUser}) {
            return {...token, ...user}
        },
    },
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
        GitHubProvider({
            clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
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
                    const data = {email: credentials!.email, password: credentials!.password}
                    await serverAuthAPI.login(data)
                    const meResponse = await serverAuthAPI.authMe()

                    const userData: User = {
                        name: meResponse.userName,
                        email: meResponse.email,
                        id: meResponse.userId,
                    }

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
}
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}

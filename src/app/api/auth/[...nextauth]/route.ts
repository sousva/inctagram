import NextAuth, {User} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import {PATH} from 'app/path'
import {instance, login} from 'redux/api/axios/instance'

const handler = NextAuth({
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
                    const accessToken = (await login(credentials!.email, credentials!.password)) as string

                    const userResponse = await instance.get<{userId: number; userName: string; email: string}>(
                        'auth/me',
                        {withCredentials: true, headers: {Authorization: `Bearer ${accessToken}`}}
                    )

                    const userData: User & {userId: number; accessToken: string} = {
                        id: userResponse.data.userId + '',
                        name: userResponse.data.userName,
                        email: userResponse.data.email,
                        accessToken,
                        userId: userResponse.data.userId,
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
})
export {handler as GET, handler as POST}

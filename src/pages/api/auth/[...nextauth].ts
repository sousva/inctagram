import NextAuth, {NextAuthOptions, User} from 'next-auth'
import {NextApiRequest, NextApiResponse} from 'next'
import CredentialsProvider from 'next-auth/providers/credentials'
import {PATH} from 'common/constant/PATH'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import {serverAuthAPI} from 'lib/server-api/server-api'
import {destroyCookie} from 'nookies'

//https://github.com/nextauthjs/next-auth/discussions/4428
//https://stackoverflow.com/questions/67594977/how-to-send-httponly-cookies-client-side-when-using-next-auth-credentials-provid/69418553#69418553
//https://stackoverflow.com/questions/68235182/nextjs-with-next-auth-setting-cookie-received-from-node-js

type NextAuthOptionsCallback = (req: NextApiRequest, res: NextApiResponse) => NextAuthOptions

const nextAuthOptions: NextAuthOptionsCallback = (req, res) => {
    return {
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
            async signIn() {
                return true
            },
            async session({session, token}) {
                session.user = token as any
                return session
            },
            async jwt({token, user}) {
                return {...token, ...user}
            },
        },
        events: {
            async signOut() {
                destroyCookie({res}, 'refreshToken', {})
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
                async authorize(credentials) {
                    try {
                        const data = {email: credentials!.email, password: credentials!.password}
                        // const token = await axios.get('http://localhost:3000/api/set')

                        const loginData = await serverAuthAPI.login(data, res)

                        const accessToken = loginData.data.accessToken

                        if (accessToken) {
                            const meResponse = await serverAuthAPI.authMe(accessToken)

                            const userData: User = {
                                name: meResponse.userName,
                                email: meResponse.email,
                                id: meResponse.userId + '',
                            }

                            return userData
                        }

                        // return {
                        //     name: 'nazar',
                        //     email: 'nazar email',
                        //     id: '3444',
                        // } as User
                        return null
                    } catch (e) {
                        console.log(e)
                        return null
                    }
                },
            }),
        ],
    }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    return NextAuth(req, res, nextAuthOptions(req, res))
}

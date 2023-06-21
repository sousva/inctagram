import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            id: string | number
            userId: string | number
            name: string
            email: string
            accessToken: string
        }
    }
}

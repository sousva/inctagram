import NextAuth from 'next-auth'
import {authOptions} from 'pages/api/auth/authOptions'

export default NextAuth(authOptions)
